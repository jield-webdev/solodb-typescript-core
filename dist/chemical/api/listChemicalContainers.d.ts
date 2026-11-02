import { ApiFormattedResponse } from '../../core/interfaces/response';
import { ChemicalContainer } from '../interfaces/chemical/chemicalContainer';
export default function listChemicalContainers({ user, location, query, order, direction, page, page_size, filter, }?: {
    user?: number;
    location?: number;
    query?: string;
    order?: "default" | "number" | "room" | "location" | "zone-group" | "amount" | "concentration" | "date-expire" | "date-marked-for-removal" | "supplier" | "last-update";
    direction?: "asc" | "desc";
    page?: number;
    page_size?: number;
    filter?: {
        general?: ("include_deleted" | "responsible" | "user" | "no_adr_classes" | "no_cas_number" | "is_standard_product" | "has_active_users" | "is_expired" | "is_marked_for_removal" | "is_zzs" | "has_cmr" | "is_cmrh_or_zzs")[];
    };
}): Promise<ApiFormattedResponse<ChemicalContainer>>;
