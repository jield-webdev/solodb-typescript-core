import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { StatusMail } from "@jield/solodb-typescript-core/equipment/interfaces/statusMail";
import { LocationMessage } from "@jield/solodb-typescript-core/location/interfaces/locationMessage";

export default async function listLocationMessages({
  statusMail,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  statusMail?: StatusMail;
  query?: string;
  order?: "default" | "title" | "last-update" | "type" | "owner";
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}): Promise<ApiFormattedResponse<LocationMessage>> {
  const searchParams = new URLSearchParams();

  if (statusMail !== undefined) {
    searchParams.append("status_mail", statusMail.id.toString());
    searchParams.append("page_size", "1000");
  }

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
    searchParams.set("page_size", pageSize.toString());
  }

  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  let url = "list/location/message?" + searchParams.toString();

  const response = await axios.get<ApiResponse<LocationMessage>>(url);
  const { data } = response;

  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
