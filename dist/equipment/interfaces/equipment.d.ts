import { Room } from '../../room/interfaces/room';
import { EquipmentModuleStatus } from './equipment/module/equipmentModuleStatus';
import { EquipmentProperty } from './equipment/equipmentProperty';
import { SetupWithoutMainEquipmentAndSetupEquipment } from './setup';
import { EquipmentGroup } from './equipment/equipmentGroup';
import { EquipmentManufacturer } from './equipment/equipmentManufacturer';
import { Area } from '../../location/interfaces/area';
export declare enum EquipmentGrade {
    "Equipment" = 1,
    "Accessory" = 2,
    "Storage" = 3
}
export declare enum WorkstationComponent {
    "ProcessNextStepInEquipment" = "ProcessNextStepInEquipment",
    "Iris" = "Iris"
}
export interface Equipment {
    id: number;
    floor_plan_item_id: number | null;
    name: string;
    number: string;
    mes_name: string | null;
    group: EquipmentGroup | null;
    serial_number: string | null;
    active: boolean;
    active_in_mes: boolean;
    reservation_possible: boolean;
    is_main_in_setup: boolean;
    setup: SetupWithoutMainEquipmentAndSetupEquipment | null;
    has_setup_equipment: boolean;
    is_in_fixed_setup: boolean;
    fixed_setup: SetupWithoutMainEquipmentAndSetupEquipment | null;
    is_in_active_setup: boolean;
    active_setup: SetupWithoutMainEquipmentAndSetupEquipment | null;
    main_tool_module_id: number;
    main_tool_latest_status?: EquipmentModuleStatus;
    is_available_for_rental: boolean;
    workstation_components: WorkstationComponent[];
    properties?: EquipmentProperty[];
    room?: Room;
    types: string[];
    grade: EquipmentGrade;
    area?: Area;
    manufacturer?: EquipmentManufacturer;
}
