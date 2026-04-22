import { RunStep } from '../../../index';
import { AxiosResponse } from 'axios';
/**
 * Finish a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/finish/{id}.
 *
 * @param runStep - Run step to mark as finished.
 * @throws Error when the run step is missing.
 */
export default function finishStep(runStep: RunStep): Promise<AxiosResponse<RunStep>>;
