import { ServiceReportCriterionType } from "@jield/solodb-typescript-core/service/interfaces/report/criterion/serviceReportCriterionType";
import { ServiceReportCriterion } from "@jield/solodb-typescript-core/service/interfaces/report/serviceReportCriterion";

export interface ServiceReportCriterionVersion {
  id: number;
  sequence: number;
  required: boolean;
  highlighted: boolean;
  default_value: string;
  criterion: ServiceReportCriterion;
  type: ServiceReportCriterionType;
}
