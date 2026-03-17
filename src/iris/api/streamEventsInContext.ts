import { createIrisEventSource, IrisStreamOptions } from "./createEventSource";

export type IrisStreamEventsInContextOptions = IrisStreamOptions & {
  context: string;
};

export default function irisStreamEventsInContext({
  context,
  ...options
}: IrisStreamEventsInContextOptions) {
  return createIrisEventSource({
    ...options,
    path: `/v1/${encodeURIComponent(context)}/stream/events`,
  });
}
