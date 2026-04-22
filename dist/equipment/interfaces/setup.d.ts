import { SetupEquipment } from '../../../equipment/interfaces/setup/equipment';
import { Zone } from '../../../room/interfaces/zone';
import { Room } from '../../../room/interfaces/room';
import { Equipment } from '../../../equipment/interfaces/equipment';
export declare enum SetupTypeEnum {
    "FIXED" = 1,
    "DYNAMIC" = 2
}
export declare enum SetupReservationTypeEnum {
    "NO_RESERVATION_POSSIBLE" = 1,
    "SCHEDULER" = 2,
    "CALENDAR" = 3
}
export type Setup = {
    id: number;
    setup_type: SetupTypeEnum;
    name: string;
    reservation_type: SetupReservationTypeEnum;
    main_equipment: Equipment;
    zone: Zone;
    room: Room;
    setup_equipment: SetupEquipment[];
};
export type SetupWithoutMainEquipmentAndSetupEquipment = Omit<Setup, 'main_equipment' | 'setup_equipment'>;
