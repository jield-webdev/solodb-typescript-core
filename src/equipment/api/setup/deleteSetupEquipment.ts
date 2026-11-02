import axios from "axios";

/** Removes a setup equipment link (SetupEquipment.id, not the equipment id). */
export default async function deleteSetupEquipment({ id }: { id: number }): Promise<void> {
  await axios.delete("delete/setup/equipment/" + id);
}
