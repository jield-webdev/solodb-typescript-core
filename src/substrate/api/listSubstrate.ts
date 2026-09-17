import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Substrate } from "@jield/solodb-typescript-core/substrate/interfaces/substrate";

export default async function listSubstrate({
  query,
  order,
  direction,
  pageSize = 25,
  page = 1,
}: {
  query?: string;
  order?: string;
  direction?: "desc" | "asc";
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<Substrate>> {
  const searchParams = new URLSearchParams();

  if (query !== undefined) {
    searchParams.append("query", query);
  }

  if (order !== undefined) {
    searchParams.append("order", order);
  }

  if (direction !== undefined) {
    searchParams.append("direction", direction);
  }

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
