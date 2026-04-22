import { RunStep } from '../../../../run/interfaces/runStep';
import { ApiFormattedResponse } from '../../../../core/interfaces/response';
import { RunStepChecklistItem } from '../../../../run/interfaces/step/runStepChecklistItem';
export default function listRunStepChecklistItems({ runStep, }: {
    runStep: RunStep;
}): Promise<ApiFormattedResponse<RunStepChecklistItem>>;
