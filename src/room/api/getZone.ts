import axios from "axios";
import { Zone } from "@jield/solodb-typescript-core/room/interfaces/zone";

export default async function getZone({ id }: { id: number }): Promise<Zone> {
  const response = await axios.get<Zone>("view/room/zone/" + id);
  return response.data;
}
