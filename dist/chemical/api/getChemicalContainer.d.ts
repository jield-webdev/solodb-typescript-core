import { ChemicalContainer } from '../interfaces/chemical/chemicalContainer';
export default function getChemicalContainer({ id }: {
    id: number;
}): Promise<ChemicalContainer>;
