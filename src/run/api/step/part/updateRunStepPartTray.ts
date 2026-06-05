import { RunStepPart } from "@jield/solodb-typescript-core/index";
import { RunTray } from "@jield/solodb-typescript-core/run/interfaces/run/runTray";
import axios, { AxiosResponse } from "axios";

export default async function updateRunStepPartTray(
  stepPart: RunStepPart,
  tray: RunTray,
  tray_row: number,
  tray_column: number,
): Promise<AxiosResponse<RunStepPart>> {
  if (!stepPart || !tray || !tray_column || !tray_row) {
    throw new Error("Invalid values when trying to update run step part tray");
  }

  const resp = await axios
    .create()
    .patch<RunStepPart>(`update/run/step/part/${stepPart.id}/tray`, {
        tray_id: tray.id,
        tray_row: tray_row,
        tray_column: tray_column,
    });

  return resp;
}
