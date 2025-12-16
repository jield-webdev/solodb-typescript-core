import axios from "axios";
import { Equipment } from "@/equipment/interfaces/equipment";

export default async function getEquipment({ id }: { id: number }) {
  const response = await axios.get<Equipment>("view/equipment/" + id);
  const { data } = response;
  return data;
}
