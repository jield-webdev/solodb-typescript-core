import { ApiFormattedResponse } from '../../core/interfaces/response';
import { FloorPlan } from '../interfaces/floorPlan';
export default function listRoomFloorPlans({ room, pageSize, page, }: {
    room: number;
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<FloorPlan>>;
