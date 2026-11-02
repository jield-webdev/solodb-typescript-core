import { User } from '../interfaces/user';
import { ApiFormattedResponse } from '../interfaces/response';
export type UserListOrder = "id" | "name" | "firstname" | "lastname" | "email" | "add-date" | "last-update";
export interface UserListFilter {
    /** 0 = deleted, 1 = active */
    status?: number[];
    roles?: number[];
    equipment?: number[];
}
export default function listUsers({ query, selection, filter, order, direction, page, pageSize, }?: {
    query?: string;
    selection?: number;
    filter?: UserListFilter;
    order?: UserListOrder;
    direction?: "ASC" | "DESC";
    page?: number;
    pageSize?: number;
}): Promise<ApiFormattedResponse<User>>;
