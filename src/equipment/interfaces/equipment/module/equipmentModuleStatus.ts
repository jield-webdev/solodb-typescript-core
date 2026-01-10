import { EquipmentStatus } from "@jield/solodb-typescript-core/equipment/interfaces/equipmentStatus";
import { User } from "@jield/solodb-typescript-core/core/interfaces/user";
import { EquipmentModuleStatusAttachment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/status/equipmentModuleStatusAttachment";

export interface EquipmentModuleStatus {
  id: number;
  status: EquipmentStatus;
  description: string;
  user: User;
  date_created: string;
  attachments: EquipmentModuleStatusAttachment[];
}
