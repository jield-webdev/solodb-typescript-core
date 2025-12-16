import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { ChemicalContainerType } from "@/chemical/interfaces/chemical/container/chemicalContainerType";

export default async function ListChemicalContainerTypes({
  query,
}: {
  query?: string;
}): Promise<ApiFormattedResponse<ChemicalContainerType>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }

  let url = "list/chemical/container/type?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ChemicalContainerType>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
