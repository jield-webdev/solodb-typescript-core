import axios from "axios";
import { Recipe } from "@jield/solodb-typescript-core/process/interfaces/module/recipe";
import { ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export type RecipeGeneralFilter =
  | "has_versions"
  | "has_changes"
  | "include_deprecated"
  | "include_inactive_equipment"
  | "include_inactive_process";

export type RecipeOrder =
  | "default"
  | "name"
  | "status"
  | "process-number"
  | "process"
  | "equipment"
  | "process-category"
  | "type"
  | "run-step"
  | "latest-version"
  | "template-step";

export default async function listRecipes({
  filter,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  filter?: RecipeGeneralFilter[];
  query?: string;
  order?: RecipeOrder;
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}) {
  const searchParams = new URLSearchParams();

  filter?.forEach((value) => {
    searchParams.append("filter[general][]", value);
  });
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

  const response = await axios.get<ApiResponse<Recipe>>("list/process/module/recipe?" + searchParams.toString());
  const { data } = response;
  return {
    recipes: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
  };
}
