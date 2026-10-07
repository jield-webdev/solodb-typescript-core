import { RunStepPart } from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import axios from "axios";

/**
 * Update the comment of a run step part and return the updated step part.
 *
 * Mirrors PATCH /api/update/run/step/part/{id}.
 */
export default async function updateRunStepPartComment({
  runStepPart,
  comment,
}: {
  runStepPart: RunStepPart;
  comment: string;
}): Promise<RunStepPart> {
  const response = await axios.create().patch<RunStepPart>("update/run/step/part/" + runStepPart.id, { comment });
  return response.data;
}
