import axios from "axios";
// migrated from react-router-dom createSearchParams to URLSearchParams
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Chemical } from "@jield/solodb-typescript-core/chemical/interfaces/chemical";

export default async function listChemicals({
  query,
  order,
  direction,
  filter,
  page,
  page_size,
}: {
  query?: string;
  order?:
    | "name"
    | "room"
    | "main-chemical"
    | "containers"
    | "role-users"
    | "active-users"
    | "last-update"
    | "cas-number";
  direction?: "asc" | "desc";
  filter?: {
    general?: ("responsible" | "user" | "no_adr_classes" | "no_cas_number")[];
  };
  page?: number;
  /** 1-1000, other values return 416 */
  page_size?: number;
} = {}): Promise<ApiFormattedResponse<Chemical>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }

  if (order !== undefined) {
    searchParams.append("order", order);
  }

  if (direction !== undefined) {
    searchParams.append("direction", direction);
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  if (page_size !== undefined) {
    searchParams.append("page_size", page_size.toString());
  }

  for (const value of filter?.general ?? []) {
    searchParams.append("filter[general][]", value);
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
