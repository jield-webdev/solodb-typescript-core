import axios from "axios";
import { EcnAttachmentPostType } from "@jield/solodb-typescript-core/equipment/interfaces/ecnAttachmentPost";

/** Uploads a file (base64 content, see fileToBase64) to an Ecn. */
export default async function createEcnAttachment(attachment: EcnAttachmentPostType): Promise<void> {
  await axios.post("create/equipment/module/ecn/attachment", attachment);
}
