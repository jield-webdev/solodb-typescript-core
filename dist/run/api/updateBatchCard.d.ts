import { Run } from '../interfaces/run';
/**
 * Set the batch card content of a run.
 *
 * Mirrors PATCH /api/update/run/batch-card/{id}. Returns the submitted fields (or an empty array for an empty body).
 */
export default function updateBatchCard({ run, content }: {
    run: Run;
    content: string;
}): Promise<{
    content?: string;
} | []>;
