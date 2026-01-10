import axios from "axios";
import { Monitor } from "@jield/solodb-typescript-core/monitor/interfaces/monitor";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";

export default async function listMonitors({
  equipment,
}: {
  equipment?: Equipment;
}): Promise<ApiFormattedResponse<Monitor>> {
  const searchParams = new URLSearchParams();

  if (equipment !== undefined) {
    searchParams.append("equipment", equipment.id.toString());
  }

  searchParams.append("ad_hoc", "true");

  let url = "list/monitor?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Monitor>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
