import axios from "axios";
import { ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { ServiceEventReportResult } from "@jield/solodb-typescript-core/service/interfaces/service/event/report/serviceEventReportResult";

export default async function listReportResult({ id }: { id: number }) {
  const searchParams = new URLSearchParams();

  if (id !== undefined) {
    searchParams.append("report", id.toString());
  }

  let url = "list/service/event/report/results?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ServiceEventReportResult>>(url);
  const { data } = response;

  return data._embedded.items;
}
