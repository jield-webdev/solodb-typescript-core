import { RunStepPartState } from '../../../interfaces/step/part/runStepPartState';
import { RunStepPart } from '../../../interfaces/step/runStepPart';
import { RunStepPartStateEnum } from '../../../enum/runStepPartStateEnum';
export default function performRunStepPartAction({ runStepPart, runStepPartAction, }: {
    runStepPart: RunStepPart;
    runStepPartAction: RunStepPartStateEnum;
}): Promise<RunStepPartState>;
