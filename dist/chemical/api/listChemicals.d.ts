import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Chemical } from '../interfaces/chemical';
export default function listChemicals({ query }: {
    query?: string;
}): Promise<ApiFormattedResponse<Chemical>>;
