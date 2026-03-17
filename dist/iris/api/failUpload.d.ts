import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisFailUpload({ fileUploadEventUid, irisServerUrl, }: {
    fileUploadEventUid: string;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
