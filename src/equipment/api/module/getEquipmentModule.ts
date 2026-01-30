import axios from "axios";
import { EquipmentModule } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/equipmentModule";

export default async function getEquipmentModule({ id }: { id: number }) {
  if (isNaN(id)) {
        return null;
  }

  const response = await axios.get<EquipmentModule>("view/equipment/module/" + id);
  const { data } = response;
  return data;
}
