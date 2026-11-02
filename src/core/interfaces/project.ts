export interface Project {
  id: number;
  name: string;
  abbr: string | null;
  label: string;
  description: string | null;
  is_active: boolean;
  is_private: boolean;
}
