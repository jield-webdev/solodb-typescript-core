import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisViewEvent({ fileUploadEventUid, irisServerUrl, }: {
    fileUploadEventUid: string;
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
