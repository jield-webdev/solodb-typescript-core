import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Substrate } from "@jield/solodb-typescript-core/substrate/interfaces/substrate";

// Server orders by id descending; query/order/direction are accepted but ignored, so they are not sent.
export default async function listSubstrate({
  pageSize = 25,
  page = 1,
}: {
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<Substrate>> {
  const searchParams = new URLSearchParams();

  searchParams.append("page_size", pageSize.toString());
  searchParams.append("page", page.toString());

  let url = "list/substrate?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Substrate>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
