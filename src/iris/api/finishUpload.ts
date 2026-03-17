import { FileUploadEvent } from "../interfaces/fileUploadEvent";
import { createIrisHttpClient } from "./createClient";

export default async function irisFinishUpload({
  fileUploadEventUid,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = createIrisHttpClient(irisServerUrl);
  const url = `/v1/event/${encodeURIComponent(fileUploadEventUid)}/finish`;

  const response = await client.post<FileUploadEvent>(url, {});
  return response.data;
}
