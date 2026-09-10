import axios from "axios";
import { ZoneGroup } from "@jield/solodb-typescript-core/room/interfaces/zoneGroup";

export default async function getZoneGroup({ id }: { id: number }): Promise<ZoneGroup> {
  const response = await axios.get<ZoneGroup>("view/room/zone/group/" + id);
  return response.data;
}
