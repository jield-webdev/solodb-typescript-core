import axios from "axios";
import { RunStepPart } from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";

export default async function listRunStepParts({
  step,
  run,
  page_size,
}: {
  step?: RunStep;
  run?: Run;
  page_size?: number;
}): Promise<ApiFormattedResponse<RunStepPart>> {
  const searchParams = new URLSearchParams();

  if (step !== undefined) {
    searchParams.append("step", step.id.toString());
  }
  if (run !== undefined) {
    searchParams.append("run", run.id.toString());
  }
  if (page_size !== undefined) {
    searchParams.append("page_size", page_size.toString());
  } else {
    searchParams.append("page_size", "10000");
  }

  let url = "list/run/step/part?" + searchParams.toString();

  const response = await axios.get<ApiResponse<RunStepPart>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
