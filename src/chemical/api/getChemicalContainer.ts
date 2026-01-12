import axios from "axios";
import { ChemicalContainer } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/chemicalContainer";

export default async function getChemicalContainer({ id }: { id: number }) {
  const response = await axios.get<ChemicalContainer>("view/chemical/container/" + id);
  const { data } = response;
  return data;
}
