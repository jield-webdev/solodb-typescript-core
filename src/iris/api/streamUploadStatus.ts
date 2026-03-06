import axios, { AxiosResponse } from "axios";

export default async function irisStreamUploadStatus({
  fileUploadEventUid,
  irisServerUrl,
}: {
  fileUploadEventUid: string;
  irisServerUrl?: string;
}): Promise<AxiosResponse<string>> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/event/${encodeURIComponent(fileUploadEventUid)}/status`;

  return client.get<string>(url, {
    headers: {
      Accept: "text/event-stream",
    },
    responseType: "text",
  });
}
