import { RunStep } from '../../interfaces/runStep';
/**
 * Update the editable fields of a run step.
 *
 * Mirrors PATCH /api/update/run/step/{id}. Returns the submitted fields, or an empty array when nothing was sent.
 */
export default function updateStep({ runStep, remark, instructions, }: {
    runStep: RunStep;
    remark?: string | null;
    instructions?: string | null;
}): Promise<{
    remark?: string | null;
    instructions?: string | null;
} | []>;
