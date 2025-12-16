import axios from "axios";
import { EquipmentModuleReservation } from "@/equipment/interfaces/equipment/module/equipmentModuleReservation";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { Equipment } from "@/equipment/interfaces/equipment";
import { EquipmentModule } from "@/equipment/interfaces/equipment/equipmentModule";

export default async function ListReservations({
  equipment,
  module,
  which,
}: {
  equipment?: Equipment;
  module?: EquipmentModule;
  which?: "active" | "past" | "upcoming";
}): Promise<ApiFormattedResponse<EquipmentModuleReservation>> {
  const searchParams = new URLSearchParams();

  if (equipment !== undefined) {
    searchParams.append("equipment", equipment.id.toString());
  }

  if (module !== undefined) {
    searchParams.append("module", module.id.toString());
  }

  if (which !== undefined) {
    searchParams.append("which", which);
  }

  let url = "list/equipment/reservation?" + searchParams.toString();

  const response = await axios.get<ApiResponse<EquipmentModuleReservation>>(url);
  const { data } = response;

  if (which == "active") {
    for (let i = 0; i < data._embedded.items.length; i++) {
      data._embedded.items[i].active = true;
    }
  }

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
