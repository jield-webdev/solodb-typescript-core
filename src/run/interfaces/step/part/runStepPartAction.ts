import {RunStepPartActionEnum} from "@jield/solodb-typescript-core/run/enum/runStepPartActionEnum";

export interface RunStepPartAction {
    id: number;
    date_created: string;
    type: {
        id: RunStepPartActionEnum;
        name: string;
    };
    comment: string;
    updated_run_step_part_status: {
        run_step_part_id: number,
        status: {
            key: string,
            text: string,
            class: string
        },
        processed: boolean,
        failed: boolean,
        started: boolean
    },
}
