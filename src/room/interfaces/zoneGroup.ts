import { Room } from "@jield/solodb-typescript-core/room/interfaces/room";

export interface ZoneGroup {
  id: number;
  name: string;
  description: string | null;
  capacity: number;
  room: Room;
  amount: {
    zones: number;
    locations: number;
  };
}
