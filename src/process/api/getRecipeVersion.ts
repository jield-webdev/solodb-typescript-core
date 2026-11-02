import axios from "axios";
import { Version } from "@jield/solodb-typescript-core/process/interfaces/module/recipe/version";

export default async function getRecipeVersion({ id }: { id: number }) {
  const response = await axios.get<Version>("view/process/module/recipe/version/" + id);
  const { data } = response;
  return data;
}
