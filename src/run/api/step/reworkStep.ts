import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import axios from "axios";

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
export default async function reworkStep({
  runStep,
  reworkedRunSteps,
  templateSteps,
  comment,
}: {
  runStep: RunStep;
  reworkedRunSteps: number[];
  templateSteps?: number[];
  comment?: string;
}): Promise<ReworkStepResult> {
  const response = await axios.create().patch<ReworkStepResult>("update/run/step/rework/" + runStep.id, {
    reworked_run_steps: reworkedRunSteps,
    ...(templateSteps !== undefined ? { template_steps: templateSteps } : {}),
    ...(comment !== undefined ? { comment } : {}),
  });
  return response.data;
}
