import axios from "axios";
import { Setup } from "@jield/solodb-typescript-core/equipment/interfaces/setup";

/** Adds an equipment to a setup; returns the updated setup. */
export default async function createSetupEquipment({
  setupId,
  equipmentId,
}: {
  setupId: number;
  equipmentId: number;
}): Promise<Setup> {
  const response = await axios.post<Setup>("create/setup/equipment/" + setupId, {
    equipment_id: equipmentId,
  });
  return response.data;
}
