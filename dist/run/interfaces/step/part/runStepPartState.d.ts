import { RunStepPartActionEnum } from '../../../../../run/enum/runStepPartActionsEnum';
import { RunStepPartStateEnum } from '../../../../../run/enum/runStepPartStateEnum';
export interface RunStepPartState {
    id: number;
    date_created: string;
    type: {
        id: RunStepPartStateEnum;
        name: string;
    };
    comment: string;
    updated_run_step_part_state: {
        run_step_part_id: number;
        run_part_id: number;
        status: {
            key: string;
            text: string;
            class: string;
        };
        processed: boolean;
        failed: boolean;
        started: boolean;
        available_actions: {
            id: RunStepPartActionEnum;
            name: string;
        }[];
    };
}
