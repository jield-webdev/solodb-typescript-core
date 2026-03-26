import {RunTray} from "@jield/solodb-typescript-core/run/interfaces/run/runTray";

export interface RunPart {
    id: number;
    short_label: string;
    label: string;
    parsed_label: string;
    scanner_label: string;
    part_processing_failed: boolean;
    part_level: number;
    root_id?: number;
    left: number;
    parent?: RunPart;
    tray: RunTray | null;
    tray_row: number | null;
    tray_column: number | null;
}
