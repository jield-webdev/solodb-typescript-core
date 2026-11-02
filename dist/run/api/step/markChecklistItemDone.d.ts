import { RunStepChecklistItem } from '../../interfaces/step/runStepChecklistItem';
/**
 * Mark a checklist item as done and return the updated item.
 *
 * Mirrors PATCH /api/update/run/step/checklist/done/{id}.
 */
export default function markChecklistItemDone({ checklistItem, }: {
    checklistItem: RunStepChecklistItem;
}): Promise<RunStepChecklistItem>;
