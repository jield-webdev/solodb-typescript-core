import {RunStepPartActionEnum} from "@jield/solodb-typescript-core/run/enum/runStepPartActionsEnum";
import {RunStepPartStateEnum} from "@jield/solodb-typescript-core/run/enum/runStepPartStateEnum";

export interface RunStepPartState {
    id: number,
    date_created: string,
    type: {
        id: RunStepPartStateEnum,
        name: string,
        is_finished_state: boolean,
        is_failed_state: boolean,
        is_repairing_state: boolean,
        is_testing_state: boolean,
        color: string,
    },
    comment: string | null,
    available_actions: {
        id: RunStepPartActionEnum,
        name: string,
        class: string,
    }[],
}
