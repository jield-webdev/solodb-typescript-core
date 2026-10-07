import axios from "axios";
import { MonitorStep } from "@jield/solodb-typescript-core/monitor/interfaces/monitorStep";
import { File } from "@jield/solodb-typescript-core/core/interfaces/file";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { MonitorStepParameter } from "@jield/solodb-typescript-core/monitor/interfaces/monitor/step/parameter";
import { MonitorRequirement } from "@jield/solodb-typescript-core/monitor/interfaces/monitorRequirement";

// Server always orders by sequence ascending; order/direction are not supported.
export default async function listMonitorStepParameters({
  step,
  requirement,
  pageSize,
  page,
}: {
  step?: MonitorStep;
  requirement?: MonitorRequirement;
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<MonitorStepParameter>> {
  const searchParams = new URLSearchParams();

  if (step !== undefined) {
    searchParams.append("step", step.id.toString());
  }
  if (requirement !== undefined) {
    searchParams.append("requirement", requirement.id.toString());
  }
  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  let url = "list/monitor/step/parameter?" + searchParams.toString();

  const response = await axios.get<ApiResponse<MonitorStepParameter>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
