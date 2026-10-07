export interface Monitor {
  id: number;
  name: string;
  description: string;
  date_created: string;
  last_update: string | null;
  type: string;
  amount_of_steps: number;
}
