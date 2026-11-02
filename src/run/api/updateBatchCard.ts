import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import axios from "axios";

/**
 * Set the batch card content of a run.
 *
 * Mirrors PATCH /api/update/run/batch-card/{id}. Returns the submitted fields (or an empty array for an empty body).
 */
export default async function updateBatchCard({ run, content }: { run: Run; content: string }): Promise<{ content?: string } | []> {
  const response = await axios.create().patch<{ content?: string } | []>("update/run/batch-card/" + run.id, { content });
  return response.data;
}
