import { SetupEquipment } from "@jield/solodb-typescript-core/equipment/interfaces/setup/equipment";
import { Zone } from "@jield/solodb-typescript-core/room/interfaces/zone";

export type Setup = {
  id: number;
  title: string;
  description: string;
  zone: Zone;
  setup_equipment: SetupEquipment[];
};
