import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import axios from "axios";

/**
 * Update the editable fields of a run step.
 *
 * Mirrors PATCH /api/update/run/step/{id}. Returns the submitted fields, or an empty array when nothing was sent.
 */
export default async function updateStep({
  runStep,
  remark,
  instructions,
}: {
  runStep: RunStep;
  remark?: string | null;
  instructions?: string | null;
}): Promise<{ remark?: string | null; instructions?: string | null } | []> {
  const body: { remark?: string | null; instructions?: string | null } = {};
  if (remark !== undefined) {
    body.remark = remark;
  }
  if (instructions !== undefined) {
    body.instructions = instructions;
  }

  const response = await axios.create().patch<{ remark?: string | null; instructions?: string | null } | []>(
    "update/run/step/" + runStep.id,
    body,
  );
  return response.data;
}
