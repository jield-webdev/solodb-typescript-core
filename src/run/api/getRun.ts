import axios from "axios";
import { Run } from "@/run/interfaces/run";

export default async function getRun({ id }: { id: number }) {
  let url = "view/run/" + id;

  const response = await axios.get<Run>(url);
  const { data } = response;
  return data;
}
