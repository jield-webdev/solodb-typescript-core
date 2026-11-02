import {RunTray} from "@jield/solodb-typescript-core/run/interfaces/run/runTray";

export interface RunPart {
    id: number;
    short_label: string | null;
    label: string | null;
    parsed_label: string;
    scanner_label: string;
    part_level: number;
    root_id: number | null;
    root: number | null;
    left: number;
    parent: RunPart | null;
    baseline: Record<string, unknown> | null;
    tray: RunTray | null;
    tray_row: number | null;
    tray_column: number | null;
}
