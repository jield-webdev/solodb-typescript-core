import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Location } from '../../../room/interfaces/location';
import { Room } from '../../../room/interfaces/room';
export default function listLocations({ environment, room, pageSize, }: {
    environment?: string;
    room?: Room;
    pageSize?: number;
}): Promise<ApiFormattedResponse<Location>>;
