import { ZoneGroup } from "@jield/solodb-typescript-core/room/interfaces/zoneGroup";

export interface Zone {
  id: number;
  name: string;
  description: string;
  status: string;
  zone_group: ZoneGroup;
  amount: {
    equipment: number;
  };
}
