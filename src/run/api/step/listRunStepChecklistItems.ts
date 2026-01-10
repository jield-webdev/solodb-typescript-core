import axios from "axios";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { RunStepChecklistItem } from "@jield/solodb-typescript-core/run/interfaces/step/runStepChecklistItem";

export default async function listRunStepChecklistItems({
  runStep,
}: {
  runStep: RunStep;
}): Promise<ApiFormattedResponse<RunStepChecklistItem>> {
  const searchParams = new URLSearchParams();

  if (runStep !== undefined) {
    searchParams.append("step", runStep.id.toString());
  }
  let url = "list/run/step/checklist?" + searchParams.toString();

  const response = await axios.get<ApiResponse<RunStepChecklistItem>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
