import { ApiFormattedResponse } from '../../core/interfaces/response';
import { OrganisationGroup } from '../interfaces/organisationGroup';
export default function listOrganisationGroups({ environment, query, order, direction, page, page_size, }?: {
    environment?: string;
    query?: string;
    order?: string;
    direction?: "asc" | "desc" | "ASC" | "DESC";
    page?: number;
    page_size?: number;
}): Promise<ApiFormattedResponse<OrganisationGroup>>;
