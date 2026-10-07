import axios from "axios";
import { ChemicalContainerExternalLabel } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/container/chemicalContainerExternalLabel";

export default async function getChemicalContainerExternalLabel({ id }: { id: number }) {
  const response = await axios.get<ChemicalContainerExternalLabel>("view/chemical/container/external-label/" + id);
  const { data } = response;
  return data;
}
