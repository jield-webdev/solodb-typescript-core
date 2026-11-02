import { FloorPlanItem, FloorPlanItemWrite } from '../interfaces/floorPlan';
export default function createRoomFloorPlanItem({ id, floor_plan_id, equipment_id, zone_group_id, points, }: {
    id: number;
} & FloorPlanItemWrite): Promise<FloorPlanItem>;
