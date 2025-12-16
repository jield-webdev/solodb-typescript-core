import axios from "axios";
// migrated from react-router-dom createSearchParams to URLSearchParams
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { Chemical } from "@/chemical/interfaces/chemical";

export default async function ListChemicals({ query }: { query?: string }): Promise<ApiFormattedResponse<Chemical>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }

  let url = "list/chemical?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Chemical>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
