import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Location } from "@jield/solodb-typescript-core/room/interfaces/location";
import { Room } from "@jield/solodb-typescript-core/room/interfaces/room";

export default async function listLocations({
  room,
  zoneGroup,
  which,
  query,
  order,
  direction,
  pageSize = 25,
  page,
}: {
  room?: Room;
  zoneGroup?: number;
  which?: string;
  query?: string;
  order?: string;
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<Location>> {
  const searchParams = new URLSearchParams();

  if (room) {
    searchParams.append("room", room.id.toString());
  }

  if (zoneGroup !== undefined) {
    searchParams.append("zone_group", zoneGroup.toString());
  }

  if (which !== undefined) {
    searchParams.append("which", which);
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

  searchParams.append("page_size", pageSize.toString());

  let url = "list/location?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Location>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
