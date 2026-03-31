import { RunPart } from '../run/runPart';
import { RunStep } from '../runStep';
import { RunStepPartAction } from './part/runStepPartAction';
export interface RunStepPart {
    id: number;
    step: RunStep;
    part: RunPart;
    date_created: string;
    part_processing_failed_in_previous_step: boolean;
    status: {
        key: string;
        text: string;
        class: string;
    };
    comment: string | null;
    actions: number;
    latest_action?: RunStepPartAction;
    processed: boolean;
    failed: boolean;
    started: boolean;
}
