import { RunStepPartState } from '../../../../../run/interfaces/step/part/runStepPartState';
import { RunStepPart } from '../../../../../run/interfaces/step/runStepPart';
import { RunStepPartStateEnum } from '../../../../../run/enum/runStepPartStateEnum';
export default function performRunStepPartAction({ runStepPart, runStepPartAction, }: {
    runStepPart: RunStepPart;
    runStepPartAction: RunStepPartStateEnum;
}): Promise<RunStepPartState>;
