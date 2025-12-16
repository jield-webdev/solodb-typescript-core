import axios from "axios";
import { EquipmentModuleEcn } from "@/equipment/interfaces/equipment/module/equipmentModuleEcn";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { Equipment } from "@/equipment/interfaces/equipment";
import { EquipmentModule } from "@/equipment/interfaces/equipment/equipmentModule";
import { StatusMail } from "@/equipment/interfaces/statusMail";

export default async function listEcn({
  equipment,
  module,
  statusMail,
}: {
  equipment?: Equipment;
  module?: EquipmentModule;
  statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<EquipmentModuleEcn>> {
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

  let url = "list/equipment/module/ecn?" + searchParams.toString();

  const response = await axios.get<ApiResponse<EquipmentModuleEcn>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
