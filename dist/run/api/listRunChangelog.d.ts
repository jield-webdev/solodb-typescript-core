import { Run } from '../interfaces/run';
import { Changelog } from '../interfaces/run/changelog';
import { ApiFormattedResponse } from '../../core/interfaces/response';
export default function listRunChangelog({ run, page, pageSize, }: {
    run: Run;
    page: number;
    pageSize?: number;
}): Promise<ApiFormattedResponse<Changelog>>;
