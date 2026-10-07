import axios from "axios";

/** Closes the issue (sets date_closed); the response body is empty. */
export default async function deleteIssue({ id }: { id: number }): Promise<void> {
  await axios.delete("delete/equipment/module/issue/" + id);
}
