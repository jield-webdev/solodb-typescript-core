import { RunStepPartActionEnum } from '../../enum/runStepPartActionsEnum';
export interface RunStepPart {
    id: number;
    step_id: number;
    part_id: number;
    date_created: string;
    part_processing_failed_in_previous_step: boolean;
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
