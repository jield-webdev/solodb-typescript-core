import { File } from "@jield/solodb-typescript-core/core/interfaces/file";
import axios from "axios";

/** Delete a file of a run step. Mirrors DELETE /api/delete/run/step/file/{id}. */
export default async function deleteStepFile({ file }: { file: File }): Promise<void> {
  await axios.delete("delete/run/step/file/" + file.id);
}
