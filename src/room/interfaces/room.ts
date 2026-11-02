import { Building } from "@jield/solodb-typescript-core/room/interfaces/building";

export interface Room {
  id: number;
  name: string;
  code: string;
  phone: string | null; // may also be an empty string
  description: string;
  building: Building;
  amount: {
    zone_groups: number;
  };
}
