import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { ChemicalContainerPurpose } from '../../../chemical/interfaces/chemical/container/chemicalContainerPurpose';
export default function listChemicalContainerPurposes({ query, }: {
    query?: string;
}): Promise<ApiFormattedResponse<ChemicalContainerPurpose>>;
