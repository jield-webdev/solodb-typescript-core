import { Run } from '../interfaces/run';
import { File } from '../../core/interfaces/file';
import { ApiFormattedResponse } from '../../core/interfaces/response';
export default function listFile({ run, query, order, direction, pageSize, page, }: {
    run: Run;
    query?: string;
    order?: string;
    direction?: string;
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<File>>;
