import { RunStep } from '../../interfaces/runStep';
import { File } from '../../../core/interfaces/file';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
export default function listRunStepFiles({ step, pageSize, page, query, }: {
    step?: RunStep;
    pageSize?: number;
    page?: number;
    query?: string;
}): Promise<ApiFormattedResponse<File>>;
