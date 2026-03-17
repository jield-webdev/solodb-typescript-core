import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisApproveUpload({ fileUploadEventUid, irisServerUrl, }: {
    fileUploadEventUid: string;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
