import { User } from '../../../core/interfaces/user';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
export default function listUsers({ query, selection }: {
    query?: string;
    selection?: number;
}): Promise<ApiFormattedResponse<User>>;
