import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Substrate } from '../interfaces/substrate';
export default function listSubstrate({ pageSize, page, }: {
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Substrate>>;
