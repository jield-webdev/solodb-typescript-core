import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Service } from "@jield/solodb-typescript-core/service/interfaces/service";

export default async function listServices({
  equipmentId,
  query,
  order,
  direction,
  pageSize = 30,
  page = 1,
}: {
  equipmentId?: number;
  query?: string;
  order?: "default" | "name";
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<Service>> {
  const searchParams = new URLSearchParams();

  if (equipmentId !== undefined) {
    searchParams.append("equipment", equipmentId.toString());
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

  searchParams.append("page_size", pageSize.toString());
  searchParams.append("page", page.toString());

  let url = "list/service?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Service>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
