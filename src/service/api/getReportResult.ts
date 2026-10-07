import listServiceEventReportResult from "@jield/solodb-typescript-core/service/api/listServiceEventReportResult";

export default async function listReportResult({ id }: { id: number }) {
  return listServiceEventReportResult({ id });
}
