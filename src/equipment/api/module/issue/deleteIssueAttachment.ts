import axios from "axios";

export default async function deleteIssueAttachment({ id }: { id: number }): Promise<void> {
  await axios.delete("delete/equipment/module/issue/attachment/" + id);
}
