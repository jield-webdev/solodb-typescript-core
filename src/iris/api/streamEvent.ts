import { createIrisEventSource, IrisStreamOptions } from "./createEventSource";

export type IrisStreamEventOptions = IrisStreamOptions & {
  fileUploadEventUid: string;
};

export default function irisStreamEvent({
  fileUploadEventUid,
  ...options
}: IrisStreamEventOptions) {
  return createIrisEventSource({
    ...options,
    path: `/v1/event/stream/status/${encodeURIComponent(fileUploadEventUid)}`,
  });
}
