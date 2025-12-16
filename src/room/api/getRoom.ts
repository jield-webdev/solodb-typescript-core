import axios from "axios";
import { Room } from "@/room/interfaces/room";

export default async function GetRoom({ id }: { id: number }) {
  const response = await axios.get<Room>("view/room/" + id);
  const { data } = response;
  return data;
}
