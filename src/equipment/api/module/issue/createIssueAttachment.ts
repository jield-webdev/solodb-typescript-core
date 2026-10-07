import axios from "axios";
import { IssueAttachmentPostType } from "@jield/solodb-typescript-core/equipment/interfaces/issueAttachmentPost";

/** Uploads a file (base64 content, see fileToBase64) to an Issue. */
export default async function createIssueAttachment(attachment: IssueAttachmentPostType): Promise<void> {
  await axios.post("create/equipment/module/issue/attachment", attachment);
}
