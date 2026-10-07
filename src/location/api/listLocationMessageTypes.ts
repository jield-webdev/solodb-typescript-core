import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { MessageType } from "@jield/solodb-typescript-core/location/interfaces/message/messageType";

export default async function listLocationMessageTypes({
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  query?: string;
  order?: "default" | "type";
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}): Promise<ApiFormattedResponse<MessageType>> {
  const searchParams = new URLSearchParams();

  if (query !== undefined) {
    searchParams.append("query", query);
  }

  if (order !== undefined) {
    searchParams.append("order", order);
  }

  if (direction !== undefined) {
    searchParams.append("direction", direction);
  }

  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  const response = await axios.get<ApiResponse<MessageType>>("list/location/message/type?" + searchParams.toString());
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
