import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { Changelog } from "@jield/solodb-typescript-core/run/interfaces/run/changelog";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listRunChangelog({
  run,
  page,
  pageSize,
}: {
  run: Run;
  page: number;
  pageSize?: number;
}): Promise<ApiFormattedResponse<Changelog>> {
  const searchParams = new URLSearchParams();

  if (run !== undefined) {
    searchParams.append("run", run.id.toString());
  }
  searchParams.append("page", page.toString());
  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  let url = "list/run/changelog?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Changelog>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
