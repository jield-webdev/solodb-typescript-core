import { IrisStreamOptions } from './createEventSource';
export type IrisStreamEventOptions = IrisStreamOptions & {
    fileUploadEventUid: string;
};
export default function irisStreamEvent({ fileUploadEventUid, ...options }: IrisStreamEventOptions): {
    start: () => Promise<void>;
    close: () => void;
};
