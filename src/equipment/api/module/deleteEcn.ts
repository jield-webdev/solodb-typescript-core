import axios from "axios";

/** Closes the ECN note (sets date_closed); the response body is empty. */
export default async function deleteEcn({ id }: { id: number }): Promise<void> {
  await axios.delete("delete/equipment/module/ecn/" + id);
}
