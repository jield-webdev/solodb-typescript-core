import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listRunSteps({
  run,
  page = 1,
  pageSize = 25,
}: {
  run: Run;
  page?: number;
  pageSize?: number;
}): Promise<ApiFormattedResponse<RunStep>> {
  const searchParams = new URLSearchParams();

  if (run !== undefined) {
    searchParams.append("run", run.id.toString());
  }
  searchParams.append("page", page.toString());
  searchParams.append("page_size", pageSize.toString());
  let url = "list/run/step?" + searchParams.toString();

  const response = await axios.get<ApiResponse<RunStep>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
