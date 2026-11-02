import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { RunHoldCode } from "@jield/solodb-typescript-core/run/interfaces/runHoldCode";

/** List all possible hold codes. Mirrors GET /api/list/run/hold-code. */
export default async function listRunHoldCodes({
  pageSize,
  page,
}: {
  pageSize?: number;
  page?: number;
} = {}): Promise<ApiFormattedResponse<RunHoldCode>> {
  const searchParams = new URLSearchParams();

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  const response = await axios.get<ApiResponse<RunHoldCode>>("list/run/hold-code?" + searchParams.toString());
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
