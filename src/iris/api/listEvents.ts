import { FileUploadEvent } from "../interfaces/fileUploadEvent";
import { createIrisHttpClient } from "./createClient";

export default async function irisListContextEvents({
  context,
  irisServerUrl,
}: {
  context: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent[]> {
  const client = createIrisHttpClient(irisServerUrl);
  const url = `/v1/${encodeURIComponent(context)}/list/events`;

  const response = await client.get<FileUploadEvent[]>(url);
  return response.data;
}
