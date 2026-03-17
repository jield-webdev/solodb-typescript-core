import { FileUploadEvent } from '../interfaces/fileUploadEvent';
type UploadFile = {
    fileName: string;
    file: Blob;
};
export default function irisUploadContent({ fileUploadEventUid, files, irisServerUrl, }: {
    fileUploadEventUid: string;
    files: UploadFile[];
    irisServerUrl?: string;
}): Promise<FileUploadEvent>;
export {};
