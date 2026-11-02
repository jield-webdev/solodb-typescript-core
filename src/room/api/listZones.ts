import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Zone } from "@jield/solodb-typescript-core/room/interfaces/zone";

export default async function listZones({
  room,
  zoneGroup,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  room?: number;
  zoneGroup?: number;
  query?: string;
  order?: string;
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}): Promise<ApiFormattedResponse<Zone>> {
  const searchParams = new URLSearchParams();

  if (room !== undefined) {
    searchParams.append("room", room.toString());
  }

  if (zoneGroup !== undefined) {
    searchParams.append("zone_group", zoneGroup.toString());
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

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  const response = await axios.get<ApiResponse<Zone>>("list/room/zone?" + searchParams.toString());
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
