import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import axios from "axios";

/** Delete the batch card of a run. Mirrors DELETE /api/delete/run/batch-card/{id}. */
export default async function deleteBatchCard({ run }: { run: Run }): Promise<void> {
  await axios.create().delete("delete/run/batch-card/" + run.id);
}
