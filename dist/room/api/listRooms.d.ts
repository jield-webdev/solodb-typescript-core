import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Room } from '../interfaces/room';
export default function listRooms({ environment, withLocations, }: {
    environment?: string;
    withLocations?: boolean;
}): Promise<ApiFormattedResponse<Room>>;
