import { RunStep } from '../../interfaces/runStep';
import { AxiosResponse } from 'axios';
/**
 * Un-skip a run step and return the updated step payload.
 *
 * Mirrors PATCH /api/update/run/step/un-skip/{id}.
 */
export default function unSkipStep(runStep: RunStep): Promise<AxiosResponse<RunStep>>;
