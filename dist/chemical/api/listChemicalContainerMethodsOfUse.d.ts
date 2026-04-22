import { ApiFormattedResponse } from '../../core/interfaces/response';
import { ChemicalContainerMethodOfUse } from '../interfaces/chemical/container/chemicalContainerMethodOfUse';
export default function listChemicalContainerMethodsOfUse({ query, }: {
    query?: string;
}): Promise<ApiFormattedResponse<ChemicalContainerMethodOfUse>>;
