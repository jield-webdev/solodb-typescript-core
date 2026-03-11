import { FileUploadEvent } from "../interfaces/fileUploadEvent";

export type IrisStreamEventSourceFactory = (
  url: string,
  eventSourceInit?: EventSourceInit,
) => EventSource;

export type IrisStreamOptions = {
  irisServerUrl?: string;
  withCredentials?: boolean;
  onEvent?: (event: FileUploadEvent) => void;
  onOpen?: (event: Event) => void;
  onError?: (event: Event) => void;
  eventSourceFactory?: IrisStreamEventSourceFactory;
};

function getIrisStreamUrl(path: string, irisServerUrl?: string): string {
  if (!irisServerUrl) {
    return path;
  }

  return new URL(path, irisServerUrl).toString();
}

export function createIrisEventSource({
  path,
  irisServerUrl,
  withCredentials,
  onEvent,
  onOpen,
  onError,
  eventSourceFactory,
}: IrisStreamOptions & {
  path: string;
}): EventSource {
  const createEventSource =
    eventSourceFactory ??
    ((url: string, eventSourceInit?: EventSourceInit) => {
      if (typeof EventSource === "undefined") {
        throw new Error(
          "EventSource is not available in this environment. Provide an eventSourceFactory when using Iris stream handlers outside the browser.",
        );
      }

      return new EventSource(url, eventSourceInit);
    });

  const eventSourceInit =
    withCredentials === undefined ? undefined : { withCredentials };
  const eventSource = createEventSource(
    getIrisStreamUrl(path, irisServerUrl),
    eventSourceInit,
  );

  if (onOpen) {
    eventSource.onopen = onOpen;
  }

  if (onEvent) {
    eventSource.onmessage = (event) => {
      onEvent(JSON.parse(event.data) as FileUploadEvent);
    };
  }

  if (onError) {
    eventSource.onerror = onError;
  }

  return eventSource;
}
