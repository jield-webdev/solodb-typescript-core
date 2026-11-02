import { RunStep } from '../../interfaces/runStep';
/**
 * Upload a file to a run step.
 *
 * Mirrors POST /api/update/run/step/upload-file/{id}. Returns the submitted fields.
 *
 * @param content - File content as data URL (as produced by FileReader.readAsDataURL).
 * @param filename - File name.
 * @param type - MIME type.
 */
export default function uploadStepFile({ runStep, content, filename, type, }: {
    runStep: RunStep;
    content: string;
    filename: string;
    type: string;
}): Promise<{
    content: string;
    filename: string;
    type: string;
}>;
