import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { RunHoldCode } from "@jield/solodb-typescript-core/run/interfaces/runHoldCode";
import axios from "axios";

export type UpdateHoldCodeResult = { hold_code: RunHoldCode; description: string | null } | [];

/**
 * Set or clear the hold code of a run.
 *
 * Mirrors PATCH /api/update/run/hold-code/{id}. Pass `holdCode: null` to clear the hold code,
 * in which case the API returns an empty array.
 */
export default async function updateRunHoldCode({
  run,
  holdCode,
  description,
}: {
  run: Run;
  holdCode: RunHoldCode | null;
  description?: string | null;
}): Promise<UpdateHoldCodeResult> {
  const response = await axios.patch<UpdateHoldCodeResult>("update/run/hold-code/" + run.id, {
    holdcode: holdCode === null ? null : holdCode.id,
    ...(description !== undefined ? { description } : {}),
  });
  return response.data;
}
