import { RunStep } from '../../interfaces/runStep';
import { AxiosResponse } from 'axios';
/**
 * Skip a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/skip/{id}.
 */
export default function skipStep(runStep: RunStep): Promise<AxiosResponse<RunStep>>;
