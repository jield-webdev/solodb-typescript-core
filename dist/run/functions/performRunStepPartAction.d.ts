import { RunStepPartActionEnum } from '../enum/runStepPartActionEnum';
import { RunStepPart } from '../interfaces/step/runStepPart';
import { RunStepPartAction } from '../interfaces/step/part/runStepPartAction';
export default function performRunStepPartAction(part: RunStepPart, action: RunStepPartActionEnum): Promise<RunStepPartAction>;
