import axios from "axios";
import { FloorPlanItem, FloorPlanItemWrite } from "@jield/solodb-typescript-core/room/interfaces/floorPlan";

export default async function createRoomFloorPlanItem({
  id,
  floor_plan_id,
  equipment_id,
  zone_group_id,
  points,
}: { id: number } & FloorPlanItemWrite): Promise<FloorPlanItem> {
  const response = await axios.post<FloorPlanItem>("create/room/" + id + "/floor-plan/item", {
    floor_plan_id,
    equipment_id,
    zone_group_id,
    points,
  });

  return response.data;
}
