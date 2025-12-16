import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { Service } from "@/service/interfaces/service";

export default async function ListServices({
  equipmentId,
}: {
  equipmentId?: number;
}): Promise<ApiFormattedResponse<Service>> {
  const searchParams = new URLSearchParams();

  if (equipmentId !== undefined) {
    searchParams.append("equipment", equipmentId.toString());
  }

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
