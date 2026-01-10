import axios from "axios";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { StatusMail } from "@jield/solodb-typescript-core/equipment/interfaces/statusMail";
import { EquipmentModule } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";

export default async function listModules({
  equipment,
  statusMail,
  run,
}: {
  equipment?: Equipment;
  statusMail?: StatusMail;
  run?: Run;
}): Promise<ApiFormattedResponse<EquipmentModule>> {
  const searchParams = new URLSearchParams();

  if (equipment !== undefined) {
    searchParams.append("equipment", equipment.id.toString());
  }

  if (statusMail !== undefined) {
    searchParams.append("status_mail", statusMail.id.toString());
    searchParams.append("page_size", "10000");
  }

  if (run !== undefined) {
    searchParams.append("run", run.id.toString());
  }

  let url = "list/equipment/module?" + searchParams.toString();

  const response = await axios.get<ApiResponse<EquipmentModule>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
