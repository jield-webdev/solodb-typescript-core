import { Recipe } from "@jield/solodb-typescript-core/process/interfaces/module/recipe";

export interface Version {
  id: number;
  version: number;
  notes: string;
  recipe: Recipe;
}
