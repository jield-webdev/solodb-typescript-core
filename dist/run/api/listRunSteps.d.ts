import { Run } from '../../../run/interfaces/run';
import { RunStep } from '../../../run/interfaces/runStep';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
export default function listRunSteps({ run, page, pageSize, }: {
    run: Run;
    page?: number;
    pageSize?: number;
}): Promise<ApiFormattedResponse<RunStep>>;
