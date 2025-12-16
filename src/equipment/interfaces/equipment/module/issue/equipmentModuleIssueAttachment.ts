import { EquipmentModuleIssue } from "@/equipment/interfaces/equipment/module/equipmentModuleIssue";

export interface EquipmentModuleIssueAttachment {
  id: number;
  date_created: string;
  filename: string;
  mime_type: string;
  file_size: number;
  url: string;
  issue: EquipmentModuleIssue;
}
