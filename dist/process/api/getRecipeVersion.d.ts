import { Version } from '../interfaces/module/recipe/version';
export default function getRecipeVersion({ id }: {
    id: number;
}): Promise<Version>;
