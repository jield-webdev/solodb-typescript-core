import axios from "axios";
import { Template } from "@jield/solodb-typescript-core/template/interfaces/template";
import { TemplateStep } from "@jield/solodb-typescript-core/template/interfaces/templateStep";
import { ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function getTemplateSteps({ template, pageSize, page }: { template: Template; pageSize?: number; page?: number }) {
  const searchParams = new URLSearchParams();

  searchParams.append("template", template.id.toString());
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }
  if (pageSize !== undefined) {
    searchParams.append("page_size", pageSize.toString());
  }

  let url = "list/template/step?" + searchParams.toString();

  const response = await axios.get<ApiResponse<TemplateStep>>(url);
  const { data } = response;
  return {
    steps: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
  };
}
