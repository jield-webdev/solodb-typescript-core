import axios from "axios";
import { MonitorRequirement } from "@jield/solodb-typescript-core/monitor/interfaces/monitorRequirement";
import { MonitorRequirementTarget } from "@jield/solodb-typescript-core/monitor/interfaces/requirement/monitorRequirementTarget";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listMonitorRequirementTargets({
  requirement,
}: {
  requirement?: MonitorRequirement;
}): Promise<ApiFormattedResponse<MonitorRequirementTarget>> {
  const searchParams = new URLSearchParams();

  if (requirement) {
    searchParams.append("requirement", requirement.id.toString());
  }

  let url = "list/monitor/requirement/target?" + searchParams.toString();

  const response = await axios.get<ApiResponse<MonitorRequirementTarget>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
