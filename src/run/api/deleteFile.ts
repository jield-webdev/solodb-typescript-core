import axios from "axios";
import { File } from "@jield/solodb-typescript-core/core/interfaces/file";

export default async function deleteFile({ file }: { file: File }): Promise<void> {
  let url = "delete/run/file/" + file.id;

  await axios.delete(url);
}
