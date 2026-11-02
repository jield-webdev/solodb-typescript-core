import { RunStepPart } from '../../../interfaces/step/runStepPart';
import { RunPart } from '../../../interfaces/run/runPart';
import { RunStep } from '../../../interfaces/runStep';
/**
 * Create a run step part (put a run part into a run step).
 *
 * Mirrors POST /api/create/run/step/part.
 */
export default function createRunStepPart({ runPart, runStep, comment, }: {
    runPart: RunPart;
    runStep: RunStep;
    comment?: string;
}): Promise<RunStepPart>;
