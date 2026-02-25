import { RunStepPartActionEnum } from '../enum/runStepPartActionEnum';
import { RunStepPart } from '../interfaces/step/runStepPart';
export default function performRunStepPartAction(part: RunStepPart, action: RunStepPartActionEnum): Promise<import('../..').RunStepPartAction>;
