import { ServiceReportcriterionCategory } from "@jield/solodb-typescript-core/service/interfaces/report/criterion/serviceReportcriterionCategory";

export interface ServiceReportCriterionType {
  id: number;
  type: string;
  category: ServiceReportcriterionCategory;
  sequence: number;
  date_created: string;
  last_update: string | null;
}
