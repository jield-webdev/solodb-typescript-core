import { RunStepPartState } from '../../../interfaces/step/part/runStepPartState';
import { RunStepPart } from '../../../interfaces/step/runStepPart';
import { RunStepPartActionEnum } from '../../../enum/runStepPartActionsEnum';
export default function performRunStepPartActions({ runStepPartActions, }: {
    runStepPartActions: {
        runStepPart: RunStepPart;
        runStepPartAction: RunStepPartActionEnum;
        comment?: string | null;
    }[];
}): Promise<RunStepPartState[]>;
