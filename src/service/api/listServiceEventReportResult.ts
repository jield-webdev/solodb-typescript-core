import axios from "axios";
import { ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { ServiceEventReportResult } from "@jield/solodb-typescript-core/service/interfaces/service/event/report/serviceEventReportResult";

export default async function listServiceEventReportResult({ id }: { id: number }) {
  const pageSize = 1000;
  const items: ServiceEventReportResult[] = [];
  let page = 1;
  let pageCount = 1;

  do {
    const searchParams = new URLSearchParams();

    searchParams.append("report", id.toString());
    searchParams.append("page_size", pageSize.toString());
    searchParams.append("page", page.toString());

    const url = "list/service/event/report/results?" + searchParams.toString();

    const response = await axios.get<ApiResponse<ServiceEventReportResult>>(url);
    const { data } = response;

    items.push(...data._embedded.items);
    pageCount = data.page_count;
    page++;
  } while (page <= pageCount);

  return items;
}
