import axios from "axios";
import { ApiFormattedResponse, ApiResponse } from "@jield/solodb-typescript-core/core/interfaces/response";
import { Measurement } from "@jield/solodb-typescript-core/run/interfaces/measurement";
import { MeasurementResult } from "@jield/solodb-typescript-core/run/interfaces/measurement/result";

export default async function listMeasurementResults({
  measurement,
}: {
  measurement: Measurement;
}): Promise<ApiFormattedResponse<MeasurementResult>> {
  const searchParams = new URLSearchParams();

  searchParams.append("measurement", String(measurement.id));

  let url = "/list/run/measurement/result?" + searchParams.toString();

  const response = await axios.get<ApiResponse<MeasurementResult>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
}
