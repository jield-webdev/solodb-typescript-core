import { ApiFormattedResponse } from '../../core/interfaces/response';
import { MessageType } from '../interfaces/message/messageType';
export default function listLocationMessageTypes({ query, order, direction, pageSize, page, }?: {
    query?: string;
    order?: "default" | "type";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<MessageType>>;
