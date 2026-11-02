import axios from "axios";
import { Chemical } from "@jield/solodb-typescript-core/chemical/interfaces/chemical";

export default async function getChemical({ id }: { id: number }) {
  const response = await axios.get<Chemical>("view/chemical/" + id);
  const { data } = response;
  return data;
}
