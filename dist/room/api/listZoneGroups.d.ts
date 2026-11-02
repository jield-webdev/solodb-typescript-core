import { ApiFormattedResponse } from '../../core/interfaces/response';
import { ZoneGroup } from '../interfaces/zoneGroup';
export default function listZoneGroups({ which, room, query, order, direction, pageSize, page, }?: {
    which?: string;
    room?: number;
    query?: string;
    order?: string;
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<ZoneGroup>>;
