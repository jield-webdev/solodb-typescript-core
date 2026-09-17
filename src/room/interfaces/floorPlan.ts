export interface PolygonPoint {
  x: number;
  y: number;
}

export type PolygonPoints = PolygonPoint[];

export interface FloorPlanItem {
  id: number;
  points: PolygonPoints;
  equipment_id: number | null;
  zone_group_id: number | null;
}

export type FloorPlanItemWrite =
  | {
      floor_plan_id: number;
      points: PolygonPoints;
      equipment_id: number;
      zone_group_id?: null;
    }
  | {
      floor_plan_id: number;
      points: PolygonPoints;
      equipment_id?: null;
      zone_group_id: number;
    };

export interface FloorPlan {
  id: number;
  room_id: number;
  width: number;
  height: number;
  url: string;
  items: FloorPlanItem[];
}
