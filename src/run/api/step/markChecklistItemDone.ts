import { RunStepChecklistItem } from "@jield/solodb-typescript-core/run/interfaces/step/runStepChecklistItem";
import axios from "axios";

/**
 * Mark a checklist item as done and return the updated item.
 *
 * Mirrors PATCH /api/update/run/step/checklist/done/{id}.
 */
export default async function markChecklistItemDone({
  checklistItem,
}: {
  checklistItem: RunStepChecklistItem;
}): Promise<RunStepChecklistItem> {
  const response = await axios
    .create()
    .patch<RunStepChecklistItem>("update/run/step/checklist/done/" + checklistItem.id, {});
  return response.data;
}
