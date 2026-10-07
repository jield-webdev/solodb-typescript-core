import axios from "axios";
import {
  ChemicalContainer,
  ChemicalContainerAmountUnitEnum,
} from "@jield/solodb-typescript-core/chemical/interfaces/chemical/chemicalContainer";

export default async function createChemicalContainer({
  chemical,
  location,
  user,
  type,
  method_of_use,
  purpose,
  sub_location,
  supplier,
  concentration,
  amount,
  amount_unit,
  expire_date,
}: {
  chemical: number;
  location: number;
  user: number;
  /** Container type id */
  type?: number | null;
  method_of_use?: number;
  purpose?: number;
  sub_location?: string | null;
  supplier?: string | null;
  concentration?: string | null;
  amount?: string | null;
  /** Omitted, null or unknown values leave the unit unset */
  amount_unit?: ChemicalContainerAmountUnitEnum | null;
  /** Date string, converted server side */
  expire_date?: string | null;
}) {
  const response = await axios.post<ChemicalContainer>("create/chemical/container", {
    chemical,
    location,
    user,
    type,
    method_of_use,
    purpose,
    sub_location,
    supplier,
    concentration,
    amount,
    amount_unit,
    expire_date,
  });
  const { data } = response;
  return data;
}
