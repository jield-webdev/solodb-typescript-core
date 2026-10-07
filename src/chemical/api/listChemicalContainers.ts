import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { ChemicalContainer } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/chemicalContainer";

export default async function listChemicalContainers({
  user,
  location,
  query,
  order,
  direction,
  page,
  page_size,
  filter,
}: {
  user?: number;
  location?: number;
  query?: string;
  order?:
    | "default"
    | "number"
    | "room"
    | "location"
    | "zone-group"
    | "amount"
    | "concentration"
    | "date-expire"
    | "date-marked-for-removal"
    | "supplier"
    | "last-update";
  direction?: "asc" | "desc";
  page?: number;
  page_size?: number;
  filter?: {
    general?: (
      | "include_deleted"
      | "responsible"
      | "user"
      | "no_adr_classes"
      | "no_cas_number"
      | "is_standard_product"
      | "has_active_users"
      | "is_expired"
      | "is_marked_for_removal"
      | "is_zzs"
      | "has_cmr"
      | "is_cmrh_or_zzs"
    )[];
  };
} = {}): Promise<ApiFormattedResponse<ChemicalContainer>> {
  const searchParams = new URLSearchParams();

  if (user !== undefined) {
    searchParams.append("user", user.toString());
  }

  if (location !== undefined) {
    searchParams.append("location", location.toString());
  }

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

  if (filter !== undefined) {
    for (const [key, values] of Object.entries(filter)) {
      for (const value of values ?? []) {
        searchParams.append(`filter[${key}][]`, String(value));
      }
    }
  }

  let url = "list/chemical/container?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ChemicalContainer>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
