import { FileUploadEventState } from "./state";

export type FileUploadEvent = {
  TTL: number;
  autoApprove: boolean;
  completedState?: string;
  /** Map of filenames to storage paths (serialized as a plain JSON object) */
  content: Record<string, string>;
  context: string;
  /** ISO 8601 date-time string */
  start: string;
  state: FileUploadEventState;
  uid: string;
};
