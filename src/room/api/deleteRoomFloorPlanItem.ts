import axios from "axios";
import { FloorPlanItem } from "@jield/solodb-typescript-core/room/interfaces/floorPlan";

export default async function deleteRoomFloorPlanItem({ floorPlanItem }: { floorPlanItem: FloorPlanItem }): Promise<void> {
  await axios.delete("delete/room/floor-plan/item/" + floorPlanItem.id);
}
