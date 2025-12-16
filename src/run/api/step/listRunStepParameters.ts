import axios from "axios";
import { RunStep } from "@/run/interfaces/runStep";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { RunStepParameter } from "@/run/interfaces/step/runStepParameter";

export default async function listRunStepParameters({
  runStep,
}: {
  runStep: RunStep;
}): Promise<ApiFormattedResponse<RunStepParameter>> {
  const searchParams = new URLSearchParams();

  if (runStep !== undefined) {
    searchParams.append("step", runStep.id.toString());
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
