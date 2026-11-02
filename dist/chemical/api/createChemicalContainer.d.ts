import { ChemicalContainer, ChemicalContainerAmountUnitEnum } from '../interfaces/chemical/chemicalContainer';
export default function createChemicalContainer({ chemical, location, user, type, method_of_use, purpose, sub_location, supplier, concentration, amount, amount_unit, expire_date, }: {
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
}): Promise<ChemicalContainer>;
