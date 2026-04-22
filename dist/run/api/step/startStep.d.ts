import { RunStep } from '../../../index';
import { AxiosResponse } from 'axios';
/**
 * Start a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/start/{id}.
 *
 * @param runStep - Run step to mark as started.
 * @throws Error when the run step is missing.
 */
export default function startStep(runStep: RunStep): Promise<AxiosResponse<RunStep>>;
