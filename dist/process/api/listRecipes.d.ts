import { Recipe } from '../interfaces/module/recipe';
export type RecipeGeneralFilter = "has_versions" | "has_changes" | "include_deprecated" | "include_inactive_equipment" | "include_inactive_process";
export type RecipeOrder = "default" | "name" | "status" | "process-number" | "process" | "equipment" | "process-category" | "type" | "run-step" | "latest-version" | "template-step";
export default function listRecipes({ filter, query, order, direction, pageSize, page, }?: {
    filter?: RecipeGeneralFilter[];
    query?: string;
    order?: RecipeOrder;
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<{
    recipes: Recipe[];
    amountOfPages: number;
    currentPage: number;
    totalItems: number;
}>;
