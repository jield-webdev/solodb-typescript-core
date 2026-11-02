import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Service } from '../interfaces/service';
export default function listServices({ equipmentId, query, order, direction, pageSize, page, }: {
    equipmentId?: number;
    query?: string;
    order?: "default" | "name";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Service>>;
