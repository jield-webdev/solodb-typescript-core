import { TrayType } from '../trayType';
export interface RunTray {
    id: number;
    name: string;
    label: string | null;
    sequence: number;
    tray_type: TrayType;
    extra_tray_id: number;
}
