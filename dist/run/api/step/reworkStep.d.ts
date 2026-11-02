import { RunStep } from '../../interfaces/runStep';
export interface ReworkStepResult {
    reworked_run_steps: number[];
    template_steps?: number[] | null;
    comment?: string | null;
}
/**
 * Create a rework operation for a run step.
 *
 * Mirrors PATCH /api/update/run/step/rework/{id}. Returns the submitted fields.
 *
 * @param reworkedRunSteps - IDs of the run steps that are reworked (required, at least one).
 * @param templateSteps - Optional IDs of template steps that are added to the run.
 * @param comment - Optional operator comment.
 */
export default function reworkStep({ runStep, reworkedRunSteps, templateSteps, comment, }: {
    runStep: RunStep;
    reworkedRunSteps: number[];
    templateSteps?: number[];
    comment?: string;
}): Promise<ReworkStepResult>;
