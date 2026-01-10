import axios from "axios";
import { RunStepPartAction } from "@jield/solodb-typescript-core/run/interfaces/step/part/runStepPartAction";
import { RunStepPart } from "@jield/solodb-typescript-core/run/interfaces/step/runStepPart";
import { RunStepPartActionEnum } from "@jield/solodb-typescript-core/run/enum/runStepPartActionEnum";

export default async function setRunStepPartAction({
  runStepPart,
  runStepPartAction,
}: {
  runStepPart: RunStepPart;
  runStepPartAction: RunStepPartActionEnum;
}): Promise<RunStepPartAction> {
  let url = "create/run/step/part/action";

  const response = await axios.post<RunStepPartAction>(url, {
    run_step_part_id: runStepPart.id,
    type: runStepPartAction,
  });
  const { data } = response;
  return data;
}
