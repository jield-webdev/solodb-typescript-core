import { RunParent } from '../interfaces/run/runParent';
export default function createRunParent({ run_id, parent_run_id, part_ids, amount_per_part, description, }: {
    run_id: number | null;
    parent_run_id: number;
    part_ids?: number[] | null;
    amount_per_part?: Record<number, number> | null;
    description?: string | null;
}): Promise<RunParent>;
