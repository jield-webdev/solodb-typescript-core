import { ServiceReportCriterionType } from './serviceReportCriterionType';
import { ServiceReportCriterion } from '../serviceReportCriterion';
export interface ServiceReportCriterionVersion {
    id: number;
    sequence: number;
    required: boolean;
    highlighted: boolean;
    default_value: string | null;
    criterion: ServiceReportCriterion;
    type: ServiceReportCriterionType;
}
