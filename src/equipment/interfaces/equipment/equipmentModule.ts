import { Equipment } from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import { EquipmentModuleStatus } from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleStatus";

export interface EquipmentModule {
  id: number;
  name: string;
  mes_name: string;
  active: boolean;
  is_main_module: boolean;
  type: EquipmentModuleType;
  latest_module_status?: EquipmentModuleStatus;
  equipment: Equipment | null;
}

export interface EquipmentModuleType {
  id: number;
  type: string;
}
