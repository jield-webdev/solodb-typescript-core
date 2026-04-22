import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisRejectUpload({ fileUploadEventUid, irisServerUrl, }: {
    fileUploadEventUid: string;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
