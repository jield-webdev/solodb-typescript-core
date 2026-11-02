import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Location } from '../interfaces/location';
import { Room } from '../interfaces/room';
export default function listLocations({ room, zoneGroup, which, query, order, direction, pageSize, page, }: {
    room?: Room;
    zoneGroup?: number;
    which?: string;
    query?: string;
    order?: string;
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Location>>;
