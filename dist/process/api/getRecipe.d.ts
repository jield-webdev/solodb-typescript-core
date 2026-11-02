import { Recipe } from '../interfaces/module/recipe';
export default function getRecipe({ id }: {
    id: number;
}): Promise<Recipe>;
