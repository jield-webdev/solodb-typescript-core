import axios from "axios";
import { FileUploadEvent } from "../interfaces/fileUploadEvent";

export type IrisStreamOptions = {
  irisServerUrl?: string;
  onEvent?: (event: FileUploadEvent) => void;
  onOpen?: (event: Event) => void;
  onError?: (event: Event) => void;
};

function getIrisStreamUrl(path: string, irisServerUrl?: string): string {
  if (!irisServerUrl) return path;
  return new URL(path, irisServerUrl).toString();
}

export function createIrisEventSource({
  path,
  irisServerUrl,
  onEvent,
  onOpen,
  onError,
}: IrisStreamOptions & { path: string }) {
  const controller = new AbortController();

  const start = async () => {
    try {
      const response = await fetch(getIrisStreamUrl(path, irisServerUrl), {
        method: "GET",
        headers: {
          Accept: "text/event-stream",
          Authorization: `${axios.defaults.headers.common["Authorization"]}`,
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      if (onOpen) {
        onOpen(new Event("open"));
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("ReadableStream not supported");
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        const parts = buffer.split("\n\n");
        buffer = parts.pop() || "";

        for (const part of parts) {
          const event = parseSSE(part);

          if (event.data && onEvent) {
            try {
              const parsed = JSON.parse(event.data) as FileUploadEvent;
              onEvent(parsed);
            } catch {
              // fallback if not JSON
              onEvent(event.data as unknown as FileUploadEvent);
            }
          }
        }
      }
    } catch (err) {
      if (onError) {
        onError(new Event("error"));
      }
    }
  };

  return {
    start,
    close: () => controller.abort(),
  };
}

function parseSSE(chunk: string) {
  const lines = chunk.split("\n");
  const event: { data?: string; type?: string; id?: string } = {};

  for (const line of lines) {
    if (line.startsWith("data:")) {
      event.data = (event.data || "") + line.slice(5).trim();
    } else if (line.startsWith("event:")) {
      event.type = line.slice(6).trim();
    } else if (line.startsWith("id:")) {
      event.id = line.slice(3).trim();
    }
  }

  return event;
}
