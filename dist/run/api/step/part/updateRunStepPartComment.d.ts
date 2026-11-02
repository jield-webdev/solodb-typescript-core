import { RunStepPart } from '../../../interfaces/step/runStepPart';
/**
 * Update the comment of a run step part and return the updated step part.
 *
 * Mirrors PATCH /api/update/run/step/part/{id}.
 */
export default function updateRunStepPartComment({ runStepPart, comment, }: {
    runStepPart: RunStepPart;
    comment: string;
}): Promise<RunStepPart>;
