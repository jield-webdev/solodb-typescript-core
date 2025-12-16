import { ApiFormattedResponse } from '../../core/interfaces/response';
import { ChemicalContainerType } from '../interfaces/chemical/container/chemicalContainerType';
export default function listChemicalContainerTypes({ query, }: {
    query?: string;
}): Promise<ApiFormattedResponse<ChemicalContainerType>>;
