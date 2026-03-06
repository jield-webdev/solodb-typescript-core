import axios from "axios";
import { FileUploadEvent } from "@jield/solodb-typescript-core/iris/interfaces/fileUploadEvent";

export default async function irisFailUpload({
  fileUploadEventUid,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/event/${encodeURIComponent(fileUploadEventUid)}/fail`;

  const response = await client.post<FileUploadEvent>(url, {});
  return response.data;
}
