import axios from "axios";
import { Recipe } from "@jield/solodb-typescript-core/process/interfaces/module/recipe";
import { Template } from "@jield/solodb-typescript-core/template/interfaces/template";
import { ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listTemplates({
  reworkRecipes,
  query,
  order,
  direction,
  pageSize,
  page,
}: {
  reworkRecipes?: Recipe[];
  query?: string;
  order?: "default" | "name" | "description" | "date-created" | "last-update";
  direction?: "asc" | "desc";
  pageSize?: number;
  page?: number;
} = {}) {
  const searchParams = new URLSearchParams();

  if (reworkRecipes !== undefined) {
    //Add the rework recipe ids to the search params, in array notation
    reworkRecipes
      .map((recipe) => recipe.id)
      .forEach((id) => {
        searchParams.append("rework_recipe_id[]", id.toString());
      });
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
    searchParams.append("page_size", pageSize.toString());
  }
  if (page !== undefined) {
    searchParams.append("page", page.toString());
  }

  let url = "list/template?" + searchParams.toString();

  const response = await axios.get<ApiResponse<Template>>(url);
  const { data } = response;
  return {
    templates: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
  };
}
