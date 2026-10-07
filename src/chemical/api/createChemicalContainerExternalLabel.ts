import axios from "axios";
import { ChemicalContainerExternalLabel } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/container/chemicalContainerExternalLabel";

export default async function createChemicalContainerExternalLabel({
  container,
  qr_code_content,
}: {
  container: number;
  /** Required by solodb (400 when missing or already in use) */
  qr_code_content: string;
}) {
  const response = await axios.post<ChemicalContainerExternalLabel>("create/chemical/container/external-label", {
    container,
    qr_code_content,
  });
  const { data } = response;
  return data;
}
