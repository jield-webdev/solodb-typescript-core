import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { FloorPlan } from "@jield/solodb-typescript-core/room/interfaces/floorPlan";

export default async function listRoomFloorPlans({
  room,
  pageSize,
  page,
}: {
  room: number;
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<FloorPlan>> {
  const searchParams = new URLSearchParams();
  searchParams.append("room", room.toString());

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  const response = await axios.get<ApiResponse<FloorPlan>>(
    "list/room/floor-plan?" + searchParams.toString(),
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
