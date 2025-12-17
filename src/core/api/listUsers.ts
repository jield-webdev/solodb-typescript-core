import axios from "axios";
import { User } from "@/core/interfaces/user";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";

export default async function listUsers({ query, selection}: { query?: string; selection?: number;}): Promise<ApiFormattedResponse<User>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }

  if (selection) {
    searchParams.append("selection", selection.toString());
  }

  let url = "list/user?" + searchParams.toString();

  const response = await axios.get<ApiResponse<User>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
};
