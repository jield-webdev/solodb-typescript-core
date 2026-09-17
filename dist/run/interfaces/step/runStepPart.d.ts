import { RunStepPartActionEnum } from '../../enum/runStepPartActionsEnum';
export interface RunStepPart {
    id: number;
    step_id: number;
    part_id: number;
    tray_id: number | null;
    tray_row: number | null;
    tray_column: number | null;
    date_created: string;
    status: {
        key: string;
        text: string;
        class: string;
    };
    comment: string | null;
    processed: boolean;
    failed: boolean;
    started: boolean;
    has_failed_in_previouse_state: boolean;
    available_actions: {
        id: RunStepPartActionEnum;
        name: string;
    }[];
}
