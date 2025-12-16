import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { Equipment } from "@/equipment/interfaces/equipment";
import { EquipmentModule } from "@/equipment/interfaces/equipment/equipmentModule";
import { StatusMail } from "@/equipment/interfaces/statusMail";
import { EquipmentModuleIssue } from "@/equipment/interfaces/equipment/module/equipmentModuleIssue";

export default async function ListIssues({
  equipment,
  module,
  statusMail,
}: {
  equipment?: Equipment;
  module?: EquipmentModule;
  statusMail?: StatusMail;
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
