import axios from "axios";
import { EquipmentModuleReservation } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleReservation";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { EquipmentModule } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";

export default async function listReservations({
  equipment,
  module,
  which,
  order,
  direction,
  page,
  pageSize,
}: {
  equipment?: Equipment;
  module?: EquipmentModule;
  which?: "active" | "past" | "upcoming";
  order?: "default" | "id" | "title" | "start" | "end";
  direction?: "asc" | "desc";
  page?: number;
  pageSize?: number;
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
    searchParams.append("page_size", pageSize.toString());
  }

  let url = "list/equipment/reservation?" + searchParams.toString();

  const response = await axios.get<ApiResponse<EquipmentModuleReservation>>(url);
  const { data } = response;

  if (which === undefined || which === "active") {
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
