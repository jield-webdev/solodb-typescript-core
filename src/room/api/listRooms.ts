import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Room } from "@jield/solodb-typescript-core/room/interfaces/room";

export default async function listRooms({
  environment,
  withLocations,
  which,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  environment?: string;
  withLocations?: boolean;
  which?: string;
  query?: string;
  order?: string;
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}): Promise<ApiFormattedResponse<Room>> {
  const searchParams = new URLSearchParams();

  if (environment !== undefined) {
    searchParams.append("environment", environment);
  }

  if (which !== undefined) {
    searchParams.append("which", which);
  } else if (withLocations) {
    searchParams.append("which", "with_locations");
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

  const response = await axios.get<ApiResponse<Room>>(
    "list/room?" + searchParams.toString(),
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
