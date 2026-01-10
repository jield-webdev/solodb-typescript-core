import axios from "axios";
import { Recipe } from "@jield/solodb-typescript-core/process/interfaces/module/recipe";
import { Template } from "@jield/solodb-typescript-core/template/interfaces/template";
import { ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";

export default async function listTemplates({ reworkRecipes }: { reworkRecipes?: Recipe[] }) {
  const searchParams = new URLSearchParams();

  if (reworkRecipes !== undefined) {
    //Add the rework recipe ids to the search params, in array notation
    reworkRecipes
      .map((recipe) => recipe.id)
      .forEach((id) => {
        searchParams.append("rework_recipe_id[]", id.toString());
      });
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
