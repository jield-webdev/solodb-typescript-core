import { Chemical } from '../interfaces/chemical';
export default function getChemical({ id }: {
    id: number;
}): Promise<Chemical>;
