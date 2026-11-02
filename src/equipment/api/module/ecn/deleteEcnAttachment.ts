import axios from "axios";

export default async function deleteEcnAttachment({ id }: { id: number }): Promise<void> {
  await axios.delete("delete/equipment/module/ecn/attachment/" + id);
}
