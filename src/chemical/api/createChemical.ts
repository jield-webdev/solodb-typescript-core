import axios from "axios";
import {
  Chemical,
  ChemicalPhysicalStateEnum,
  ChemicalStandardProductEnum,
} from "@jield/solodb-typescript-core/chemical/interfaces/chemical";

export default async function createChemical({
  name,
  standard_product,
  physical_state,
  cas_number,
  description,
  chemical_formula,
}: {
  name: string;
  standard_product: ChemicalStandardProductEnum;
  physical_state: ChemicalPhysicalStateEnum;
  cas_number?: string;
  description?: string;
  /** Stored by solodb, but not returned in the response */
  chemical_formula?: string | null;
}) {
  const response = await axios.post<Chemical>("create/chemical", {
    name,
    standard_product,
    physical_state,
    cas_number,
    description,
    chemical_formula,
  });
  const { data } = response;
  return data;
}
