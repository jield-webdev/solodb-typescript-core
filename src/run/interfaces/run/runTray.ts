import {
    TrayType,
} from "@jield/solodb-typescript-core/run/interfaces/trayType";

export interface RunTray {
    id: number;
    name: string;
    label: string | null;
    sequence: number;
    tray_type: TrayType;
    extra_tray_id: number;
}
