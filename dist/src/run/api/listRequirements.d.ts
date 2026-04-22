import { Run } from '../../../run/interfaces/run';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { RunStep } from '../../../run/interfaces/runStep';
import { Requirement } from '../../../run/interfaces/requirement';
export default function listRequirements({ step, run, }: {
    step?: RunStep;
    run?: Run;
}): Promise<ApiFormattedResponse<Requirement>>;
