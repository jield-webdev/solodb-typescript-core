import { Facility } from "@jield/solodb-typescript-core/location/interfaces/facility";

export interface Area {
  id: number;
  title: string;
  description: string | null;
  facility: Facility;
  date_created: string;
  last_update: string | null;
}
