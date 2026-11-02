import { IssueAttachmentPostType } from '../../../interfaces/issueAttachmentPost';
/** Uploads a file (base64 content, see fileToBase64) to an Issue. */
export default function createIssueAttachment(attachment: IssueAttachmentPostType): Promise<void>;
