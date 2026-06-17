import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Substrate } from '../interfaces/substrate';
export default function listSubstrate({ query, order, direction, pageSize, page, }: {
    query?: string;
    order?: string;
    direction?: "desc" | "asc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Substrate>>;
