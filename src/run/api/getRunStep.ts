import axios from "axios";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";

export default async function getRunStep({ id }: { id: number }) {
  let url = "view/run/step/" + id;

  const response = await axios.get<RunStep>(url);
  const { data } = response;
  return data;
}
