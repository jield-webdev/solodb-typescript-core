import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { OrganisationProject } from "@jield/solodb-typescript-core/organisation/interfaces/organisationProject";

export default async function listOrganisationProjects({
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
  purpose?: 1 | 2 | 3 | 4 | 5;
} = {}): Promise<ApiFormattedResponse<OrganisationProject>> {
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

  let url = "list/organisation/project?" + searchParams.toString();

  const response = await axios.get<ApiResponse<OrganisationProject>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
