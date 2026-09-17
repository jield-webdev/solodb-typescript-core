export interface RunParent {
    id: number;
    run_id: number;
    parent_run_id: number;
    part_ids: number[] | null;
    description: string | null;
    open: boolean;
}
