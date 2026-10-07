import axios from "axios";
import { EquipmentModuleEcn } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleEcn";

export default async function updateEcn({
  id,
  moduleId,
  ecn,
  description,
  owner,
}: {
  id: number;
  moduleId: number;
  ecn: string;
  description?: string | null;
  /** User ID of the owner */
  owner: number;
}): Promise<EquipmentModuleEcn> {
  const response = await axios.patch<EquipmentModuleEcn>("update/equipment/module/ecn/" + id, {
    module_id: moduleId,
    ecn,
    description,
    owner,
  });
  return response.data;
}
