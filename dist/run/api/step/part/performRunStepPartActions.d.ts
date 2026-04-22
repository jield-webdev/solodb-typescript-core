import { RunStepPartState } from '../../../../../run/interfaces/step/part/runStepPartState';
import { RunStepPart } from '../../../../../run/interfaces/step/runStepPart';
import { RunStepPartStateEnum } from '../../../../../run/enum/runStepPartStateEnum';
export default function performRunStepPartActions({ runStepPartActions, }: {
    runStepPartActions: {
        runStepPart: RunStepPart;
        runStepPartAction: RunStepPartStateEnum;
        comment?: string | null;
    }[];
}): Promise<RunStepPartState[]>;
