import { Run } from '../interfaces/run';
/** Delete the batch card of a run. Mirrors DELETE /api/delete/run/batch-card/{id}. */
export default function deleteBatchCard({ run }: {
    run: Run;
}): Promise<void>;
