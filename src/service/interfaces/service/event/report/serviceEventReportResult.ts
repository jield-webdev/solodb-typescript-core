import { ServiceReportCriterionVersion } from "@jield/solodb-typescript-core/service/interfaces/report/criterion/serviceReportCriterionVersion";

export interface ServiceEventReportResult {
  id: number;
  event_report: number;
  /**
   * Display value, not the stored key. select/radio: option label ('' when the key has no label);
   * checkbox: comma-separated option labels (null when unset); action: 'Done' or ''; date: 'Y-m-d' or null;
   * integer/float: number; other types: string.
   */
  value: number | string | null;
  comment: string | null;
  date_created: string;
  date_updated: string | null;
  date_changed: string | null;
  criterion_version: ServiceReportCriterionVersion;
}
