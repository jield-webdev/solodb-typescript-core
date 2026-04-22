import { RunStep } from '../../../../run/interfaces/runStep';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { RunStepParameter } from '../../../../run/interfaces/step/runStepParameter';
export default function listRunStepParameters({ runStep, }: {
    runStep: RunStep;
}): Promise<ApiFormattedResponse<RunStepParameter>>;
