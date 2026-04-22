import { IrisStreamOptions } from './createEventSource';
export type IrisStreamEventsInContextOptions = IrisStreamOptions & {
    context: string;
};
export default function irisStreamEventsInContext({ context, ...options }: IrisStreamEventsInContextOptions): {
    start: () => Promise<void>;
    close: () => void;
};
