import { Chemical, ChemicalPhysicalStateEnum, ChemicalStandardProductEnum } from '../interfaces/chemical';
export default function createChemical({ name, standard_product, physical_state, cas_number, description, chemical_formula, }: {
    name: string;
    standard_product: ChemicalStandardProductEnum;
    physical_state: ChemicalPhysicalStateEnum;
    cas_number?: string;
    description?: string;
    /** Stored by solodb, but not returned in the response */
    chemical_formula?: string | null;
}): Promise<Chemical>;
