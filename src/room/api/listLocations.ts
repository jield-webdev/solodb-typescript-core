import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { Location } from "@/room/interfaces/location";
import { Room } from "@/room/interfaces/room";

export default async function listLocations({
  environment,
  room,
  pageSize = 25,
}: {
  environment?: string;
  room?: Room;
  pageSize?: number;
}): Promise<ApiFormattedResponse<Location>> {
  const searchParams = new URLSearchParams();

  if (environment) {
    searchParams.append("environment", environment);
  }

  if (room) {
    searchParams.append("room", room.id.toString());
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
