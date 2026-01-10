import { Site } from "@jield/solodb-typescript-core/room/interfaces/site";

export interface Building {
  id: number;
  name: string;
  code: string;
  site: Site;
  amount: {
    rooms: number;
  };
}
