import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { ChemicalContainerExternalLabel } from "@jield/solodb-typescript-core/chemical/interfaces/chemical/container/chemicalContainerExternalLabel";

export default async function listChemicalContainerExternalLabels({
  qrCodeContent,
}: {
  qrCodeContent: string;
}): Promise<ApiFormattedResponse<ChemicalContainerExternalLabel>> {
  const searchParams = new URLSearchParams();

  searchParams.append("qr_code_content", qrCodeContent);

  let url = "list/chemical/container/external-label?" + searchParams.toString();

  const response = await axios.get<ApiResponse<ChemicalContainerExternalLabel>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
