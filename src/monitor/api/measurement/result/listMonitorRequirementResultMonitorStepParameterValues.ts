import axios from "axios";
import { MonitorMeasurementResult } from "@/monitor/interfaces/measurement/monitorMeasurementResult";
import { MonitorRequirement } from "@/monitor/interfaces/monitorRequirement";
import { Monitor } from "@/monitor/interfaces/monitor";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { MonitorResultStepParameterValue } from "@/monitor/interfaces/measurement/result/monitorResultStepParameterValue";

export default async function listMonitorRequirementResultMonitorStepParameterValues({
  requirement,
  result,
  order,
  direction,
  pageSize,
  page,
}: {
  requirement?: MonitorRequirement;
  result?: MonitorMeasurementResult;
  order?: "id" | "date-created";
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<MonitorResultStepParameterValue>> {
  const searchParams = new URLSearchParams();

  if (requirement) {
    searchParams.append("requirement", requirement.id.toString());
  }

  if (result) {
    searchParams.append("result", result.id.toString());
  }

  if (order) {
    searchParams.append("order", order);
  }

  if (direction) {
    searchParams.append("direction", direction);
  }

  if (pageSize) {
    searchParams.append("page_size", pageSize.toString());
  }

  if (page) {
    searchParams.append("page", page.toString());
  }

  let url = "list/monitor/measurement/result/step-parameter-value?" + searchParams.toString();

  const response = await axios.get<ApiResponse<MonitorResultStepParameterValue>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
