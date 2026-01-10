import axios from "axios";
import { MonitorRequirement } from "@jield/solodb-typescript-core/monitor/interfaces/monitorRequirement";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listMonitorRequirements({
  equipmentId,
  monitorId,
}: {
  equipmentId?: number;
  monitorId?: number;
}): Promise<ApiFormattedResponse<MonitorRequirement>> {
  const searchParams = new URLSearchParams();

  if (equipmentId !== undefined) {
    searchParams.append("equipment", equipmentId.toString());
  }

  if (monitorId) {
    searchParams.append("monitor", monitorId.toString());
  }

  let url = "list/monitor/requirement?" + searchParams.toString();

  const response = await axios.get<ApiResponse<MonitorRequirement>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
