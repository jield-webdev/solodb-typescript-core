import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Chemical } from '../interfaces/chemical';
export default function listChemicals({ query, order, direction, filter, page, page_size, }?: {
    query?: string;
    order?: "name" | "room" | "main-chemical" | "containers" | "role-users" | "active-users" | "last-update" | "cas-number";
    direction?: "asc" | "desc";
    filter?: {
        general?: ("responsible" | "user" | "no_adr_classes" | "no_cas_number")[];
    };
    page?: number;
    /** 1-1000, other values return 416 */
    page_size?: number;
}): Promise<ApiFormattedResponse<Chemical>>;
