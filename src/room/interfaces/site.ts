export interface SiteFloorPlan {
  id: number;
  width: number;
  height: number;
  url: string;
}

export interface Site {
  id: number;
  name: string;
  code: string;
  has_floor_plans: boolean;
  has_external_chemical_labelling: boolean;
  floor_plans: SiteFloorPlan[];
  amount: {
    buildings: number;
  };
}
