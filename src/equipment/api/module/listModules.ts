import axios from "axios";
import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { StatusMail } from "@jield/solodb-typescript-core/equipment/interfaces/statusMail";
import { EquipmentModule, EquipmentModuleType } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";

export default async function listModules({
  equipment,
  statusMail,
  run,
  type,
  query,
  page,
  pageSize,
}: {
  equipment?: Equipment;
  statusMail?: StatusMail;
  run?: Run;
  type?: EquipmentModuleType | number;
  query?: string;
  page?: number;
  pageSize?: number;
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

  if (type !== undefined) {
    searchParams.append("type", (typeof type === "number" ? type : type.id).toString());
  }

  if (query !== undefined) {
    searchParams.append("query", query);
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  if (pageSize !== undefined) {
    searchParams.set("page_size", pageSize.toString());
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
