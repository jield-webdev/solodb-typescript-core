import { RunStep } from "@jield/solodb-typescript-core/index";
import axios, { AxiosResponse } from "axios";

/**
 * Finish a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/finish/{id}.
 *
 * @param runStep - Run step to mark as finished.
 * @throws Error when the run step is missing.
 */
export default async function finishStep(
  runStep: RunStep,
): Promise<AxiosResponse<RunStep>> {
  if (!runStep) {
    throw new Error("Run step is undefined when trying to finish step");
  }

  const resp = await axios
    .create()
    .patch<RunStep>("update/run/step/finish/" + runStep.id, {});

  return resp;
}
