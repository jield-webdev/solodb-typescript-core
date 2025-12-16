import axios from "axios";
import { ApiResponse } from "@/core/interfaces/response";
import { ServiceEventReportResult } from "@/service/interfaces/service/event/report/serviceEventReportResult";

export default async function ListReportResult({ id }: { id: number }) {
  const searchParams = new URLSearchParams();

  if (id !== undefined) {
    searchParams.append("report", id.toString());
  }

  let url = "list/service/event/report/results?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ServiceEventReportResult>>(url);
  const { data } = response;

  return data._embedded.items;
}
