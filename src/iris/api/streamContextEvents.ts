import axios, { AxiosResponse } from "axios";

export default async function irisStreamContextEvents({
  context,
  irisServerUrl,
}: {
  context: string;
  irisServerUrl?: string;
}): Promise<AxiosResponse<string>> {
  const client = irisServerUrl
    ? axios.create({ baseURL: irisServerUrl })
    : axios;
  const url = `/v1/${encodeURIComponent(context)}/events`;

  return client.get<string>(url, {
    headers: {
      Accept: "text/event-stream",
    },
    responseType: "text",
  });
}
