import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export type RunListGeneralFilter =
  | "involved"
  | "own"
  | "has_batch_card"
  | "has_hold_code"
  | "has_no_hold_code"
  | "trained";

export default async function listRuns({
  environment,
  operator,
  firstUnfinishedStepEquipment,
  availableAsParentForRun,
  query,
  order,
  direction,
  pageSize,
  page,
  runLabel,
  generalFilter,
}: {
  environment?: string;
  /** When true only open runs with unfinished steps are returned (operator view); sends operator=1. */
  operator?: boolean;
  /**
   * Filter on the next (first unfinished step) equipment.
   * Equipment: only runs where this equipment is next. null: only runs without a next equipment.
   * undefined: no filter.
   */
  firstUnfinishedStepEquipment?: Equipment | null;
  availableAsParentForRun?: Run;
  query?: string;
  order?: string;
  direction?: string;
  pageSize?: number;
  page?: number;
  runLabel?: string;
  generalFilter?: RunListGeneralFilter[];
}): Promise<ApiFormattedResponse<Run>> {
  const searchParams = new URLSearchParams();

  if (operator === true) {
    searchParams.append("operator", "1");
  }

  if (firstUnfinishedStepEquipment !== undefined) {
    // An empty value makes the API return only runs without a next equipment
    searchParams.append(
      "first_unfinished_step_equipment_id",
      firstUnfinishedStepEquipment === null ? "" : firstUnfinishedStepEquipment.id.toString()
    );
  }

  if (environment !== undefined) {
    searchParams.append("environment", environment);
  }

  if (availableAsParentForRun !== undefined && availableAsParentForRun !== null) {
    searchParams.append("available_as_parent_for_run", availableAsParentForRun.id.toString());
  }

  if (runLabel !== undefined) {
    searchParams.append("run_label", runLabel);
  }

  if (generalFilter !== undefined) {
    for (const value of generalFilter) {
      searchParams.append("filter[general][]", value);
    }
  }

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
