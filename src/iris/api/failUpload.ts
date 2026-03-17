import { FileUploadEvent } from "../interfaces/fileUploadEvent";
import { createIrisHttpClient } from "./createClient";

export default async function irisFailUpload({
  fileUploadEventUid,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = createIrisHttpClient(irisServerUrl);
  const url = `/v1/event/${encodeURIComponent(fileUploadEventUid)}/fail`;

  const response = await client.post<FileUploadEvent>(url, {});
  return response.data;
}
