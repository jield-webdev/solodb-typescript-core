import { ApiFormattedResponse } from '../../core/interfaces/response';
import { OrganisationTeam } from '../interfaces/organisationTeam';
export default function listOrganisationTeams({ environment, query, order, direction, page, page_size, purpose, filter, }?: {
    environment?: string;
    query?: string;
    order?: string;
    direction?: "asc" | "desc" | "ASC" | "DESC";
    page?: number;
    page_size?: number;
    purpose?: 1 | 2 | 3;
    filter?: {
        general?: ("approvalRequired" | "showInactive")[];
        groups?: number[];
        purposes?: (1 | 2 | 3)[];
    };
}): Promise<ApiFormattedResponse<OrganisationTeam>>;
