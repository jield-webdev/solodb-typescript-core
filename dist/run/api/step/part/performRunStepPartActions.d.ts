import { RunStepPartState } from '../../../interfaces/step/part/runStepPartState';
import { RunStepPart } from '../../../interfaces/step/runStepPart';
import { RunStepPartStateEnum } from '../../../enum/runStepPartStateEnum';
export default function performRunStepPartActions({ runStepPartActions, }: {
    runStepPartActions: {
        runStepPart: RunStepPart;
        runStepPartAction: RunStepPartStateEnum;
        comment?: string | null;
    }[];
}): Promise<RunStepPartState[]>;
