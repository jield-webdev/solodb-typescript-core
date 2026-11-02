import { ApiFormattedResponse } from '../../core/interfaces/response';
import { StatusMail } from '../../equipment/interfaces/statusMail';
import { LocationMessage } from '../interfaces/locationMessage';
export default function listLocationMessages({ statusMail, query, order, direction, pageSize, page, }?: {
    statusMail?: StatusMail;
    query?: string;
    order?: "default" | "title" | "last-update" | "type" | "owner";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<LocationMessage>>;
