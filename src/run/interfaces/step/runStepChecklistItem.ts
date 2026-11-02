export interface RunStepChecklistItem {
  id: number;
  is_executed: boolean;
  task: string;
  description: string;
  date_executed: string | null;
}
