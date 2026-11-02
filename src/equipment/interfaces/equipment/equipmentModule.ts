import {Equipment} from "@jield/solodb-typescript-core/equipment/interfaces/equipment";
import {
    EquipmentModuleStatus
} from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleStatus";

export interface EquipmentModule {
    id: number;
    name: string;
    mes_name: string | null;
    active: boolean;
    is_main_module: boolean;
    serial_number: string | null;
    type?: EquipmentModuleType;
    properties: EquipmentModuleProperty[];
    latest_module_status?: EquipmentModuleStatus;
    equipment: Equipment;
}

export interface EquipmentModuleType {
    id: number;
    type: string | null;
}

export interface EquipmentModuleProperty {
    id: number;
    property: string;
    label: string;
    value: string | number | null;
}
