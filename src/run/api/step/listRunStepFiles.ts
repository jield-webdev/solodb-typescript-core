import axios from "axios";
import { RunStep } from "@/run/interfaces/runStep";
import { File } from "@/core/interfaces/file";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";

export default async function ListRunStepFiles({
  step,
  pageSize,
}: {
  step?: RunStep;
  pageSize?: number;
}): Promise<ApiFormattedResponse<File>> {
  const searchParams = new URLSearchParams();

  if (step !== undefined) {
    searchParams.append("step", step.id.toString());
  }
  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  //We want the file to be ordered by date_created DESC
  searchParams.append("order", "date-created");
  searchParams.append("direction", "DESC");

  let url = "list/run/step/file?" + searchParams.toString();

  const response = await axios.get<ApiResponse<File>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
