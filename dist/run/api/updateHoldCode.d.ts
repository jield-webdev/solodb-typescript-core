import { Run } from '../interfaces/run';
import { RunHoldCode } from '../interfaces/runHoldCode';
export type UpdateHoldCodeResult = {
    hold_code: RunHoldCode;
    description: string | null;
} | [];
/**
 * Set or clear the hold code of a run.
 *
 * Mirrors PATCH /api/update/run/hold-code/{id}. Pass `holdCode: null` to clear the hold code,
 * in which case the API returns an empty array.
 */
export default function updateRunHoldCode({ run, holdCode, description, }: {
    run: Run;
    holdCode: RunHoldCode | null;
    description?: string | null;
}): Promise<UpdateHoldCodeResult>;
