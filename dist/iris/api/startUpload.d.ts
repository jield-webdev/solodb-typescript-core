import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisStartUpload({ context, autoApprove, TTL, irisServerUrl, }: {
    context: string;
    autoApprove?: boolean;
    TTL?: number;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
