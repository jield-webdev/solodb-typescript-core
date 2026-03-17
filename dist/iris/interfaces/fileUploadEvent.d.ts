import { FileUploadEventState } from './state';
export type FileUploadEvent = {
    TTL: number;
    autoApprove: boolean;
    completedState: string;
    content: Map<string, string>;
    context: string;
    start: Date;
    state: FileUploadEventState;
    uid: string;
};
