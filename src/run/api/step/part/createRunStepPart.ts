import { RunStepPart } from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import { RunPart } from "@jield/solodb-typescript-core/run/interfaces/run/runPart";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import axios from "axios";

/**
 * Create a run step part (put a run part into a run step).
 *
 * Mirrors POST /api/create/run/step/part.
 */
export default async function createRunStepPart({
  runPart,
  runStep,
  comment,
}: {
  runPart: RunPart;
  runStep: RunStep;
  comment?: string;
}): Promise<RunStepPart> {
  const response = await axios.post<RunStepPart>("create/run/step/part", {
    run_part_id: runPart.id,
    run_step_id: runStep.id,
    ...(comment !== undefined ? { comment } : {}),
  });
  return response.data;
}
