import { FileUploadEvent } from "../interfaces/fileUploadEvent";
import { createIrisHttpClient } from "./createClient";

const DEFAULT_TTL_SECONDS = 3600;

export default async function irisStartUpload({
  context,
  autoApprove,
  TTL,
  irisServerUrl,
}: {
  context: string;
  autoApprove?: boolean;
  /** Time to live in seconds, defaults to 3600 */
  TTL?: number;
  irisServerUrl?: string;
}): Promise<FileUploadEvent> {
  const client = createIrisHttpClient(irisServerUrl);
  const url = `/v1/${encodeURIComponent(context)}/start_upload`;
  // Iris dereferences both fields without nil checks (start_upload.go), so they must always be sent
  const payload: { autoApprove: boolean; TTL: number } = {
    autoApprove: autoApprove ?? false,
    TTL: TTL ?? DEFAULT_TTL_SECONDS,
  };

  const response = await client.post<FileUploadEvent>(url, payload);
  return response.data;
}
