export interface Type {
  id: number;
  name: string;
  can_be_requirement: boolean;
  has_color: boolean;
  color: string | null;
  amount_of_categories: number;
}
