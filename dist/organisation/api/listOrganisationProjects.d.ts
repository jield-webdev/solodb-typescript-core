import { ApiFormattedResponse } from '../../core/interfaces/response';
import { OrganisationProject } from '../interfaces/organisationProject';
export default function listOrganisationProjects({ environment, query, order, direction, page, page_size, purpose, }?: {
    environment?: string;
    query?: string;
    order?: string;
    direction?: "asc" | "desc" | "ASC" | "DESC";
    page?: number;
    page_size?: number;
    purpose?: 1 | 2 | 3 | 4 | 5;
}): Promise<ApiFormattedResponse<OrganisationProject>>;
