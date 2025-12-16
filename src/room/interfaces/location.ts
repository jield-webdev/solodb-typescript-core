import { ZoneGroup } from "@/room/interfaces/zoneGroup";

export interface Location {
  id: number;
  name: string;
  code: string;
  amount: {
    containers: number;
  };
  zone_group: ZoneGroup;
}
