import axios from "axios";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { RunStepParameter } from "@jield/solodb-typescript-core/run/interfaces/step/runStepParameter";

export default async function listRunStepParameters({
  runStep,
  pageSize,
  page,
}: {
  runStep: RunStep;
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<RunStepParameter>> {
  const searchParams = new URLSearchParams();

  if (runStep !== undefined) {
    searchParams.append("step", runStep.id.toString());
  }

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  let url = "list/run/step/parameter?" + searchParams.toString();

  const response = await axios.get<ApiResponse<RunStepParameter>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
