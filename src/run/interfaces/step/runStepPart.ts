import {RunStepPartAction} from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartAction";

export interface RunStepPart {
    id: number;
    step_id: number;
    part_id: number;
    date_created: string;
    status: {
        key: string,
        text: string,
        class: string
    }
    comment: string | null;
    actions: number;
    latest_action?: RunStepPartAction;
    processed: boolean;
    failed: boolean;
    started: boolean;
}
