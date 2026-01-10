import axios from "axios";
import { Room } from "@jield/solodb-typescript-core/room/interfaces/room";

export default async function getRoom({ id }: { id: number }) {
  const response = await axios.get<Room>("view/room/" + id);
  const { data } = response;
  return data;
}
