import { Run } from '../interfaces/run';
import { ApiFormattedResponse } from '../../core/interfaces/response';
import { RunStep } from '../interfaces/runStep';
import { Requirement } from '../interfaces/requirement';
export default function listRequirements({ step, run, pageSize, page, }: {
    step?: RunStep;
    run?: Run;
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Requirement>>;
