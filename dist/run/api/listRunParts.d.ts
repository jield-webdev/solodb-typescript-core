import { RunPart } from '../../../run/interfaces/run/runPart';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Run } from '../../../run/interfaces/run';
export default function listRunParts({ run, level }: {
    run: Run;
    level?: number;
}): Promise<ApiFormattedResponse<RunPart>>;
