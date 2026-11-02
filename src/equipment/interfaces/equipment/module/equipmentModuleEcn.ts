import { User } from "@jield/solodb-typescript-core/core/interfaces/user";

export interface EquipmentModuleEcn {
  id: number;
  module_id: number;
  ecn: string;
  description: string | null;
  date_created: string;
  owner: User;
  date_closed: string | null;
  last_update: string | null;
  updated_by: User | null;
  attachments: number;
}
