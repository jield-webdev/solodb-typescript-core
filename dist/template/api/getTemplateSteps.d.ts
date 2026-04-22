import { Template } from '../../../template/interfaces/template';
import { TemplateStep } from '../../../template/interfaces/templateStep';
export default function getTemplateSteps({ template, pageSize }: {
    template?: Template;
    pageSize?: number;
}): Promise<{
    steps: TemplateStep[];
    amountOfPages: number;
    currentPage: number;
    totalItems: number;
}>;
