export interface RunParent {
  id: number;
  run_id: number;
  parent_run_id: number;
  part_ids: number[];
  description: string | null;
  /** 1 = open (RunParent::OPEN), any other value = closed */
  open: number;
}
