export interface Template {
  id: number;
  name: string;
  label: string;
  /** Contains HTML at runtime; sanitize before rendering. */
  description: string;
  date_created: string;
  last_update: string | null;
  amount_of_steps: number;
}
