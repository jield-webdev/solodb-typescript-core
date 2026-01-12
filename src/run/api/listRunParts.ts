import axios from "axios";
import { RunPart } from "@jield/solodb-typescript-core/run/interfaces/run/runPart";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";

export default async function listRunParts({ run }: { run: Run }): Promise<ApiFormattedResponse<RunPart>> {
  const searchParams = new URLSearchParams();
  searchParams.append("run", run.id.toString());
  searchParams.append("page_size", "10000");

  let url = "list/run/parts?" + searchParams.toString();

  const response = await axios.get<ApiResponse<RunPart>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
