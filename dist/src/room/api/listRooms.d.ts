import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { Room } from '../../../room/interfaces/room';
export default function listRooms({ environment, withLocations, }: {
    environment?: string;
    withLocations?: boolean;
}): Promise<ApiFormattedResponse<Room>>;
