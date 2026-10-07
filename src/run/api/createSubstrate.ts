import axios from "axios";
import { RunSubstrate } from "@jield/solodb-typescript-core/run/interfaces/run/runSubstrate";

export default async function createSubstrate({
  run_id,
  substrate_id,
  amount,
}: {
  run_id: number;
  substrate_id: number;
  amount: number;
}): Promise<RunSubstrate> {
  const response = await axios.post<RunSubstrate>("create/run/substrate", {
    run_id,
    substrate_id,
    amount,
  });

  return response.data;
}
