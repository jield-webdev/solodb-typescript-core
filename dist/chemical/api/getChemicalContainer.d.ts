import { ChemicalContainer } from '../../../chemical/interfaces/chemical/chemicalContainer';
export default function getChemicalContainer({ id }: {
    id: number;
}): Promise<ChemicalContainer>;
