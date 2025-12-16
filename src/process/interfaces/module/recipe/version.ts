import { Recipe } from "@/process/interfaces/module/recipe";

export interface Version {
  id: number;
  version: number;
  notes: string;
  recipe: Recipe;
}
