import axios from "axios";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { RunStepPartAction } from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartAction";
import { RunStepPart } from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";

export default async function listRunStepPartActions({
  part,
  step,
  page_size,
}: {
  part?: RunStepPart;
  step?: RunStep;
  page_size?: number;
}): Promise<ApiFormattedResponse<RunStepPartAction>> {
  const searchParams = new URLSearchParams();

  if (part !== undefined) {
    searchParams.append("part", part.id.toString());
  }
  if (step !== undefined) {
    searchParams.append("step", step.id.toString());
  }
  if (page_size !== undefined) {
    searchParams.append("page_size", page_size.toString());
  }

  let url = "list/run/step/part/action?" + searchParams.toString();

  const response = await axios.get<ApiResponse<RunStepPartAction>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
