import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { OrganisationTeam } from "@jield/solodb-typescript-core/organisation/interfaces/organisationTeam";

export default async function listOrganisationTeams({
  environment,
  query,
  order,
  direction,
  page,
  page_size,
  purpose,
}: {
  environment?: string;
  query?: string;
  order?: string;
  direction?: "asc" | "desc" | "ASC" | "DESC";
  page?: number;
  page_size?: number;
  purpose?: 1 | 2 | 3;
} = {}): Promise<ApiFormattedResponse<OrganisationTeam>> {
  const searchParams = new URLSearchParams();

  if (environment !== undefined) {
    searchParams.append("environment", environment);
  }

  if (query !== undefined) {
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

  if (purpose !== undefined) {
    searchParams.append("purpose", purpose.toString());
  }

  let url = "list/organisation/team?" + searchParams.toString();

  const response = await axios.get<ApiResponse<OrganisationTeam>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
