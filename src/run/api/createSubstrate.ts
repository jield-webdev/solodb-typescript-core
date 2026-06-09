import axios from "axios";
import { Substrate } from "@jield/solodb-typescript-core/substrate/interfaces/substrate";

export default async function createSubstrate({
  run_id,
  substrate_id,
  amount,
}: {
  run_id: number;
  substrate_id: number;
  amount: number;
}): Promise<Substrate> {
  const response = await axios.post<Substrate>("create/run/substrate", {
    run_id,
    substrate_id,
    amount,
  });

  return response.data;
}
