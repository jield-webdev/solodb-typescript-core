import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { ChemicalContainerMethodOfUse } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/container/chemicalContainerMethodOfUse";

export default async function listChemicalContainerMethodsOfUse({
  query,
}: {
  query?: string;
}): Promise<ApiFormattedResponse<ChemicalContainerMethodOfUse>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }
  let url = "list/chemical/container/method-of-use?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ChemicalContainerMethodOfUse>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
