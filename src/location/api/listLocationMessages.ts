import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { StatusMail } from "@/equipment/interfaces/statusMail";
import { LocationMessage } from "@/location/interfaces/locationMessage";

export default async function listLocationMessages({
  statusMail,
}: {
  statusMail?: StatusMail;
}): Promise<ApiFormattedResponse<LocationMessage>> {
  const searchParams = new URLSearchParams();

  if (statusMail !== undefined) {
    searchParams.append("status_mail", statusMail.id.toString());
    searchParams.append("page_size", "1000");
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
