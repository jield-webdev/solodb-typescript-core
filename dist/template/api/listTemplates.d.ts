import { Recipe } from '../../process/interfaces/module/recipe';
import { Template } from '../interfaces/template';
export default function listTemplates({ reworkRecipes, query, order, direction, pageSize, page, }?: {
    reworkRecipes?: Recipe[];
    query?: string;
    order?: "default" | "name" | "description" | "date-created" | "last-update";
    direction?: "asc" | "desc";
    pageSize?: number;
    page?: number;
}): Promise<{
    templates: Template[];
    amountOfPages: number;
    currentPage: number;
    totalItems: number;
}>;
