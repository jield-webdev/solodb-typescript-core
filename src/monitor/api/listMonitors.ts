import axios from "axios";
import { Monitor } from "@jield/solodb-typescript-core/monitor/interfaces/monitor";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";

export default async function listMonitors({
  equipment,
  adHoc = true,
  pageSize,
  page,
}: {
  equipment?: Equipment;
  /** Defaults to true (previous behaviour); pass false to omit the ad_hoc filter */
  adHoc?: boolean;
  pageSize?: number;
  page?: number;
}): Promise<ApiFormattedResponse<Monitor>> {
  const searchParams = new URLSearchParams();

  if (equipment !== null && equipment !== undefined) {
    searchParams.append("equipment", equipment.id.toString());
  }

  if (adHoc) {
    searchParams.append("ad_hoc", "true");
  }

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

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
