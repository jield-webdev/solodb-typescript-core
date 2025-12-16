import { RunStep } from '../../interfaces/runStep';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { RunStepParameter } from '../../interfaces/step/runStepParameter';
export default function listRunStepParameters({ runStep, }: {
    runStep: RunStep;
}): Promise<ApiFormattedResponse<RunStepParameter>>;
