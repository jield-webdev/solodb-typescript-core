import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { ZoneGroup } from "@jield/solodb-typescript-core/room/interfaces/zoneGroup";

export default async function listZoneGroups({
  which,
  room,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  which?: string;
  room?: number;
  query?: string;
  order?: string;
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}): Promise<ApiFormattedResponse<ZoneGroup>> {
  const searchParams = new URLSearchParams();

  if (which !== undefined) {
    searchParams.append("which", which);
  }

  if (room !== undefined) {
    searchParams.append("room", room.toString());
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

  const response = await axios.get<ApiResponse<ZoneGroup>>(
    "list/room/zone/group?" + searchParams.toString(),
  );
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
