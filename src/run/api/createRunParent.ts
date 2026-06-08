import axios from "axios";
import { RunParent } from "@jield/solodb-typescript-core/run/interfaces/run/runParent";

export default async function createRunParent({
  run_id,
  parent_run_id,
  part_ids,
  amount_per_part,
  description,
}: {
  run_id: number | null;
  parent_run_id: number;
  part_ids?: number[] | null;
  amount_per_part?: Record<number, number> | null;
  description?: string | null;
}): Promise<RunParent> {
  const response = await axios.post<RunParent>("create/run/parent", {
    run_id,
    parent_run_id,
    ...(part_ids !== undefined ? { part_ids } : {}),
    ...(amount_per_part !== undefined ? { amount_per_part } : {}),
    ...(description !== undefined ? { description } : {}),
  });

  return response.data;
}
