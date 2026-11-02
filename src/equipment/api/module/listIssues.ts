import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { EquipmentModule } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";
import { StatusMail } from "@jield/solodb-typescript-core/equipment/interfaces/statusMail";
import { EquipmentModuleIssue } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleIssue";

export default async function listIssues({
  equipment,
  module,
  statusMail,
  query,
  filterGeneral,
  order,
  direction,
  page,
  pageSize,
}: {
  equipment?: Equipment;
  module?: EquipmentModule;
  statusMail?: StatusMail;
  query?: string;
  /** Sent as filter[general][]=...; include_inactive includes closed items, my_issues only items owned by the current user */
  filterGeneral?: ("include_inactive" | "my_issues")[];
  order?: "default" | "owner" | "updated_by" | "area" | "number" | "module" | "facility" | "date-created" | "last-update" | "forecast-up";
  direction?: "asc" | "desc";
  page?: number;
  pageSize?: number;
}): Promise<ApiFormattedResponse<EquipmentModuleIssue>> {
  const searchParams = new URLSearchParams();

  if (equipment !== undefined) {
    searchParams.append("equipment", equipment.id.toString());
  }
  if (module !== undefined) {
    searchParams.append("module", module.id.toString());
  }

  if (statusMail !== undefined) {
    searchParams.append("status_mail", statusMail.id.toString());
    searchParams.append("page_size", "1000");
  }
  if (query !== undefined) {
    searchParams.append("query", query);
  }
  if (filterGeneral !== undefined) {
    filterGeneral.forEach((value) => searchParams.append("filter[general][]", value));
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
  if (pageSize !== undefined) {
    searchParams.set("page_size", pageSize.toString());
  }

  let url = "list/equipment/module/issue?" + searchParams.toString();

  const response = await axios.get<ApiResponse<EquipmentModuleIssue>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
