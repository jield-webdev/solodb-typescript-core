import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Room } from '../interfaces/room';
export default function listRooms({ withLocations, which, query, filterGeneral, order, direction, pageSize, page, }?: {
    withLocations?: boolean;
    which?: string;
    query?: string;
    filterGeneral?: Array<"trained" | "responsible" | "inactive" | "only_inactive">;
    order?: string;
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Room>>;
