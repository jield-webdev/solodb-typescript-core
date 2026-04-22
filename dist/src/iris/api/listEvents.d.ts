import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export default function irisListContextEvents({ context, irisServerUrl, }: {
    context: string;
    irisServerUrl?: string;
}): Promise<FileUploadEvent[]>;
