import { RunStep } from '../../interfaces/runStep';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { RunStepChecklistItem } from '../../interfaces/step/runStepChecklistItem';
export default function listRunStepChecklistItems({ runStep, pageSize, page, }: {
    runStep: RunStep;
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<RunStepChecklistItem>>;
