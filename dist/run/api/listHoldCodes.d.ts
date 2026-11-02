import { ApiFormattedResponse } from '../../core/interfaces/response';
import { RunHoldCode } from '../interfaces/runHoldCode';
/** List all possible hold codes. Mirrors GET /api/list/run/hold-code. */
export default function listRunHoldCodes({ pageSize, page, }?: {
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<RunHoldCode>>;
