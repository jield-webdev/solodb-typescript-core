import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { EquipmentStatus } from "@/equipment/interfaces/equipmentStatus";

export default async function ListEquipmentStatus(): Promise<ApiFormattedResponse<EquipmentStatus>> {
  const searchParams = new URLSearchParams();
  let url = "list/equipment/status?" + searchParams.toString();

  const response = await axios.get<ApiResponse<EquipmentStatus>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
