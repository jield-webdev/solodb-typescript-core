import {RunStepPartActionEnum} from "../../enum/runStepPartActionsEnum";
import {RunStepPartState} from "./part/runStepPartState";

export interface RunStepPart {
    id: number;
    step_id: number;
    part_id: number;
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
    available_actions: {
        id: RunStepPartActionEnum;
        name: string;
    }[];
}
