import { ZoneGroup } from "@/room/interfaces/zoneGroup";

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
