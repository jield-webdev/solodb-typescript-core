import { FileUploadEvent } from '../interfaces/fileUploadEvent';
export type IrisStreamOptions = {
    irisServerUrl?: string;
    onEvent?: (event: FileUploadEvent) => void;
    onOpen?: (event: Event) => void;
    onError?: (event: Event) => void;
};
export declare function createIrisEventSource({ path, irisServerUrl, onEvent, onOpen, onError, }: IrisStreamOptions & {
    path: string;
}): {
    start: () => Promise<void>;
    close: () => void;
};
