import { EquipmentStatus } from "@/equipment/interfaces/equipmentStatus";
import { User } from "@/core/interfaces/user";
import { EquipmentModuleStatusAttachment } from "@/equipment/interfaces/equipment/module/status/equipmentModuleStatusAttachment";

export interface EquipmentModuleStatus {
  id: number;
  status: EquipmentStatus;
  description: string;
  user: User;
  date_created: string;
  attachments: EquipmentModuleStatusAttachment[];
}
