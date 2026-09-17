export enum ProjectPurpose {
  Run = 1,
  Equipment = 2,
  Sensors = 3,
  Substrate = 4,
  Chemicals = 5,
}

export type OrganisationProject = {
  id: number;
  name: string;
  abbr: string | null;
  label: string;
  description?: string | null;
  is_active: boolean;
  is_private: boolean;
};
