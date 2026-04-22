import { Recipe } from '../../../process/interfaces/module/recipe';
import { Template } from '../../../template/interfaces/template';
export default function listTemplates({ reworkRecipes }: {
    reworkRecipes?: Recipe[];
}): Promise<{
    templates: Template[];
    amountOfPages: number;
    currentPage: number;
    totalItems: number;
}>;
