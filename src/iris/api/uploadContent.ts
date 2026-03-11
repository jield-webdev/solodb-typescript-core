import axios from "axios";
import { FileUploadEvent } from "../interfaces/fileUploadEvent";

type UploadFile = {
  fileName: string;
  file: Blob;
};

export default async function irisUploadContent({
  fileUploadEventUid,
  files,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  files: UploadFile[];
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/event/${encodeURIComponent(fileUploadEventUid)}/upload_content`;
  const formData = new FormData();

  files.forEach((item, index) => {
    formData.append(`files[${index}][fileName]`, item.fileName);
    formData.append(`files[${index}][file]`, item.file, item.fileName);
  });

  const response = await client.post<FileUploadEvent>(url, formData);
  return response.data;
}
