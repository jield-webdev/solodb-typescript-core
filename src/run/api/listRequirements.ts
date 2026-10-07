import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { Requirement } from "@jield/solodb-typescript-core/run/interfaces/requirement";

export default async function listRequirements({
  step,
  run,
  pageSize,
  page,
}: {
  step?: RunStep;
  run?: Run;
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<Requirement>> {
  const searchParams = new URLSearchParams();

  if (step !== undefined) {
    searchParams.append("step", String(step.id));
  }

  if (run !== undefined) {
    searchParams.append("run", String(run.id));
  }

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  let url = "list/run/requirement?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Requirement>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
