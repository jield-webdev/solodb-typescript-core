import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisFinishUpload({ fileUploadEventUid, irisServerUrl, }: {
    fileUploadEventUid: string;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
