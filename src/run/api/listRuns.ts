import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listRuns({
  environment,
  firstUnfinishedStepEquipment,
  availableAsParentForRun,
}: {
  environment?: string;
  firstUnfinishedStepEquipment?: Equipment;
  availableAsParentForRun?: number;
}): Promise<ApiFormattedResponse<Run>> {
  const searchParams = new URLSearchParams();

  if (firstUnfinishedStepEquipment !== undefined) {
    searchParams.append("operator", "1");
    searchParams.append("first_unfinished_step_equipment_id", firstUnfinishedStepEquipment.id.toString());
  }

  if (environment !== undefined) {
    searchParams.append("environment", environment);
  }

  if (availableAsParentForRun !== undefined) {
    searchParams.append("available_as_parent_for_run", availableAsParentForRun.toString());
  }

  let url = "list/run?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Run>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
