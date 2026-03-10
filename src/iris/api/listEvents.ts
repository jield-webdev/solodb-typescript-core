import axios, { AxiosResponse } from "axios";
import { FileUploadEvent } from "../interfaces/fileUploadEvent";

export default async function irisListContextEvents({
  context,
  irisServerUrl,
}: {
  context: string;
  irisServerUrl?: string;
}): Promise<AxiosResponse<FileUploadEvent[]>> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/${encodeURIComponent(context)}/list/events`;

  return client.get<FileUploadEvent[]>(url);
}
