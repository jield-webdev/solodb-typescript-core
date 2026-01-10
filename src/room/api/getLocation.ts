import axios from "axios";
import { Location } from "@jield/solodb-typescript-core/room/interfaces/location";

export default async function getLocation({ id }: { id: number }) {
  const response = await axios.get<Location>("view/location/" + id);
  const { data } = response;
  return data;
}
