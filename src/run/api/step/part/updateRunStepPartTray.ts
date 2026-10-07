import { RunStepPart } from "@jield/solodb-typescript-core/index";
import { RunTray } from "@jield/solodb-typescript-core/run/interfaces/run/runTray";
import axios, { AxiosResponse } from "axios";

export default async function updateRunStepPartTray(
  stepPart: RunStepPart,
  tray: RunTray | null,
  tray_row: number,
  tray_column: number,
  update_subsequent?: boolean,
  extra_tray_id?: number,
): Promise<AxiosResponse<RunStepPart>> {
  // tray_id is only optional on the API when extra_tray_id is given
  if (!stepPart || (!tray && !extra_tray_id) || !tray_column || !tray_row) {
    throw new Error("Invalid values when trying to update run step part tray");
  }

  const body: any = {
    tray_row: tray_row,
    tray_column: tray_column,
  };

  if (tray) {
    body.tray_id = tray.id;
  }

  if (update_subsequent !== undefined && update_subsequent !== null) {
    body.update_subsequent = update_subsequent;
  }

  if (extra_tray_id !== undefined && extra_tray_id !== null) {
    body.extra_tray_id = extra_tray_id;
  }

  const resp = await axios
    .create()
    .patch<RunStepPart>(`update/run/step/part/${stepPart.id}/tray`, body);

  return resp;
}
