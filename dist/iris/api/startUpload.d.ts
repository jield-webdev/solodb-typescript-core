import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisStartUpload({ context, autoApprove, TTL, irisServerUrl, }: {
    context: string;
    autoApprove?: boolean;
    /** Time to live in seconds, defaults to 3600 */
    TTL?: number;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
