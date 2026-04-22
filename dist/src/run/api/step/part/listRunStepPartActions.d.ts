import { RunStep } from '../../../../../run/interfaces/runStep';
import { ApiFormattedResponse } from '../../../../../core/interfaces/response';
import { RunStepPartState } from '../../../../../run/interfaces/step/part/runStepPartState';
import { RunStepPart } from '../../../../../run/interfaces/step/runStepPart';
export default function listRunStepPartActions({ part, step, page_size, }: {
    part?: RunStepPart;
    step?: RunStep;
    page_size?: number;
}): Promise<ApiFormattedResponse<RunStepPartState>>;
