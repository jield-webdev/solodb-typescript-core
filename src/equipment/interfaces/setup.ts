import {SetupEquipment} from "@jield/solodb-typescript-core/equipment/interfaces/setup/equipment";
import {Zone} from "@jield/solodb-typescript-core/room/interfaces/zone";
import {Room} from "@jield/solodb-typescript-core/room/interfaces/room";
import {Equipment} from "@jield/solodb-typescript-core/equipment/interfaces/equipment";

export enum SetupTypeEnum {
    "FIXED" = 1,
    "DYNAMIC" = 2,
}

export enum SetupReservationTypeEnum {
    "NO_RESERVATION_POSSIBLE" = 1,
    "SCHEDULER" = 2,
    "CALENDAR" = 3,
}

export type Setup = {
    id: number;
    setup_type: SetupTypeEnum;
    reservation_type: SetupReservationTypeEnum;
    main_equipment: Equipment
    zone: Zone;
    room: Room;
    setup_equipment: SetupEquipment[];
};

export type SetupWithoutMainEquipmentAndSetupEquipment = Omit<Setup, 'main_equipment' | 'setup_equipment'>;