import { TrayTypeOrientationEnum } from '../enum/trayTypeOrientationEnum';
export interface TrayTypeForbiddenSlot {
    x: number;
    y: number;
}
export interface TrayType {
    id: number;
    type: string;
    description: string | null;
    rows: number;
    columns: number;
    orientation: TrayTypeOrientationEnum;
    forbidden_slots: TrayTypeForbiddenSlot[];
}
