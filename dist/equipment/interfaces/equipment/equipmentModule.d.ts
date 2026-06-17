import { Equipment } from '.';
import { EquipmentModuleStatus } from './module/equipmentModuleStatus';
export interface EquipmentModule {
    id: number;
    name: string;
    mes_name: string;
    active: boolean;
    is_main_module: boolean;
    type: EquipmentModuleType;
    latest_module_status?: EquipmentModuleStatus;
    equipment: Equipment;
}
export interface EquipmentModuleType {
    id: number;
    type: string;
}
