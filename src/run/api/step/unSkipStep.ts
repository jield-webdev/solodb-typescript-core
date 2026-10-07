import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import axios, { AxiosResponse } from "axios";

/**
 * Un-skip a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/un-skip/{id}.
 */
export default async function unSkipStep(runStep: RunStep): Promise<AxiosResponse<RunStep>> {
  if (!runStep) {
    throw new Error("Run step is undefined when trying to un-skip step");
  }

  return axios.create().patch<RunStep>("update/run/step/un-skip/" + runStep.id, {});
}
