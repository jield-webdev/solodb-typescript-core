import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { File } from "@jield/solodb-typescript-core/core/interfaces/file";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listFile({
  run,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  run: Run;
  query?: string;
  order?: string;
  direction?: string;
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<File>> {
  const searchParams = new URLSearchParams();

  searchParams.append("run", run.id.toString());

  if (query !== undefined) {
    searchParams.append("query", query);
  }
  if (order !== undefined) {
    searchParams.append("order", order);
  }
  if (direction !== undefined) {
    searchParams.append("direction", direction);
  }
  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  let url = "list/run/file?" + searchParams.toString();

  const response = await axios.get<ApiResponse<File>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
