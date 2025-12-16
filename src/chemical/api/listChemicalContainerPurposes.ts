import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@/core/interfaces/response";
import { ChemicalContainerPurpose } from "@/chemical/interfaces/chemical/container/chemicalContainerPurpose";

export default async function listChemicalContainerPurposes({
  query,
}: {
  query?: string;
}): Promise<ApiFormattedResponse<ChemicalContainerPurpose>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }

  let url = "list/chemical/container/purpose?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ChemicalContainerPurpose>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
