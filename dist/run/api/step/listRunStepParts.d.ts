import { RunStepPart } from '../../../../run/interfaces/step/runStepPart';
import { RunStep } from '../../../../run/interfaces/runStep';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { Run } from '../../../../run/interfaces/run';
import { RunPart } from '../../../../run/interfaces/run/runPart';
export default function listRunStepParts({ step, run, runPart, page_size, page, }: {
    step?: RunStep;
    run?: Run;
    runPart?: RunPart[];
    page_size?: number;
    page?: number;
}): Promise<ApiFormattedResponse<RunStepPart>>;
