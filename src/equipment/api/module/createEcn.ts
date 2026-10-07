import axios from "axios";
import { EquipmentModuleEcn } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleEcn";

export default async function createEcn({
  moduleId,
  ecn,
  description,
  owner,
}: {
  moduleId: number;
  ecn: string;
  description?: string | null;
  /** User ID of the owner */
  owner: number;
}): Promise<EquipmentModuleEcn> {
  const response = await axios.post<EquipmentModuleEcn>("create/equipment/module/ecn", {
    module_id: moduleId,
    ecn,
    description,
    owner,
  });
  return response.data;
}
