import { User } from '../interfaces/user';
import { ApiFormattedResponse } from '../interfaces/response';
export default function listUsers({ query, selection }: {
    query?: string;
    selection?: number;
}): Promise<ApiFormattedResponse<User>>;
