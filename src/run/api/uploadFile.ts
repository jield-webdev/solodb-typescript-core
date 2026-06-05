import axios from "axios";
import { Run } from "@jield/solodb-typescript-core/run/interfaces/run";
import { RunStep } from "@jield/solodb-typescript-core/run/interfaces/runStep";

export default async function uploadFile({
  filename,
  type,
  content,
  run,
  step,
}: {
  filename: string;
  type: string;
  content: string;
  run?: Run;
  step?: RunStep;
}): Promise<Record<string, unknown>> {
  let url = "create/file/upload-file";

  const response = await axios.post<Record<string, unknown>>(url, {
    filename,
    type,
    content,
    ...(run !== undefined ? { run: run.id } : {}),
    ...(step !== undefined ? { step: step.id } : {}),
  });
  const { data } = response;
  return data;
}
