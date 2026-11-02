import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Zone } from '../interfaces/zone';
export default function listZones({ room, zoneGroup, query, order, direction, pageSize, page, }?: {
    room?: number;
    zoneGroup?: number;
    query?: string;
    order?: string;
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Zone>>;
