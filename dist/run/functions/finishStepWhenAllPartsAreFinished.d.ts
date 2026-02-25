import { RunStep } from '../interfaces/runStep';
import { RunStepPart } from '../interfaces/step/runStepPart';
export default function finishStepWhenAllPartsAreFinished(step: RunStep, stepParts: RunStepPart[]): Promise<boolean>;
