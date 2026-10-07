import axios from "axios";
import { Recipe } from "@jield/solodb-typescript-core/process/interfaces/module/recipe";

export default async function getRecipe({ id }: { id: number }) {
  const response = await axios.get<Recipe>("view/process/module/recipe/" + id);
  const { data } = response;
  return data;
}
