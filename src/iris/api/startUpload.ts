import { FileUploadEvent } from "../interfaces/fileUploadEvent";
import { createIrisHttpClient } from "./createClient";

export default async function irisStartUpload({
  context,
  autoApprove,
  TTL,
  irisServerUrl,
}: {
  context: string;
  autoApprove?: boolean;
  TTL?: number;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = createIrisHttpClient(irisServerUrl);
  const url = `/v1/${encodeURIComponent(context)}/start_upload`;
  const payload: { autoApprove?: boolean; TTL?: number } = {};

  if (autoApprove !== undefined) {
    payload.autoApprove = autoApprove;
  }

  if (TTL !== undefined) {
    payload.TTL = TTL;
  }

  const response = await client.post<FileUploadEvent>(url, payload);
  return response.data;
}
