import {Room} from "@jield/solodb-typescript-core/room/interfaces/room";
import {
    EquipmentModuleStatus
} from "@jield/solodb-typescript-core/equipment/interfaces/equipment/module/equipmentModuleStatus";
import {EquipmentProperty} from "./equipment/equipmentProperty";
import {Setup, SetupWithoutMainEquipmentAndSetupEquipment} from "@jield/solodb-typescript-core/equipment/interfaces/setup";
import {Area} from "@jield/solodb-typescript-core/location/interfaces/area";

export enum EquipmentGrade {
    "Equipment" = 1,
    "Accessory" = 2,
    "Storage" = 3,
}


export interface Equipment {
    id: number;
    name: string;
    number: string;
    mes_name: string;
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
    main_tool_module_id: number | null;
    main_tool_latest_status?: EquipmentModuleStatus;
    is_available_for_rental: boolean;
    properties?: EquipmentProperty[];
    room: Room;
    types: string[];
    grade: EquipmentGrade;
    area: Area | null;
}
