import axios from "axios";
import { Monitor } from "@jield/solodb-typescript-core/monitor/interfaces/monitor";

export default async function getMonitor({ id }: { id: number }) {
  let response = await axios.get<Monitor>("view/monitor/" + id);
  const { data } = response;
  return data;
}
