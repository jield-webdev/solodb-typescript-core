import { FilterData, FilterFormData } from '../interfaces/filter';
export default function getFilter({ service, environment, formResult, }: {
    service: string;
    environment?: string;
    formResult?: FilterData;
}): Promise<FilterFormData>;
