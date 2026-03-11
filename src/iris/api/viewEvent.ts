import axios from "axios";
import { FileUploadEvent } from "../interfaces/fileUploadEvent";

export default async function irisViewEvent({
  fileUploadEventUid,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/event/view/event/${encodeURIComponent(fileUploadEventUid)}`;

  const response = await client.get<FileUploadEvent>(url);
  return response.data;
}
