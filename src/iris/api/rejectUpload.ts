import axios from "axios";
import { FileUploadEvent } from "@jield/solodb-typescript-core/iris/interfaces/fileUploadEvent";

export default async function irisRejectUpload({
  fileUploadEventUid,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/event/${encodeURIComponent(fileUploadEventUid)}/reject`;

  const response = await client.post<FileUploadEvent>(url, {});
  return response.data;
}
