import {RunStepPartActionEnum} from "../../enum/runStepPartActionsEnum";

export interface RunStepPart {
    id: number;
    step_id: number;
    part_id: number;
    /** Only present when the step part is placed on a tray */
    tray_id?: number;
    tray_row?: number;
    tray_column?: number;
    date_created: string;
    date_started: string | null;
    status: {
        key: string;
        text: string;
        class: string;
    };
    comment: string | null;
    processed: boolean;
    failed: boolean;
    started: boolean;
    has_failed_in_previous_state: boolean;
    available_actions: {
        id: RunStepPartActionEnum;
        name: string;
        class: string;
    }[];
}
