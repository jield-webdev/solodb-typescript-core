import axios from "axios";
import { FileUploadEvent } from "../interfaces/fileUploadEvent";

export default async function irisListContextEvents({
  context,
  irisServerUrl,
}: {
  context: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent[]> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/${encodeURIComponent(context)}/list/events`;

  const response = await client.get<FileUploadEvent[]>(url);
  return response.data;
}
