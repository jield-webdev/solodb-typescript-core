import { TrayType } from '../../../../run/interfaces/trayType';
export interface RunTray {
    id: number;
    name: string;
    label: string;
    sequence: number;
    tray_type: TrayType;
}
