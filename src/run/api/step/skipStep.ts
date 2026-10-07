import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";
import axios, { AxiosResponse } from "axios";

/**
 * Skip a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/skip/{id}.
 */
export default async function skipStep(runStep: RunStep): Promise<AxiosResponse<RunStep>> {
  if (!runStep) {
    throw new Error("Run step is undefined when trying to skip step");
  }

  return axios.create().patch<RunStep>("update/run/step/skip/" + runStep.id, {});
}
