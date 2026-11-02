import { File } from '../../../core/interfaces/file';
/** Delete a file of a run step. Mirrors DELETE /api/delete/run/step/file/{id}. */
export default function deleteStepFile({ file }: {
    file: File;
}): Promise<void>;
