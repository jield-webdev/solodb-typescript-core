import axios from "axios";
import { StatusMail } from "@/equipment/interfaces/statusMail";

export default async function getStatusMail({ id }: { id: number }) {
  const response = await axios.get<StatusMail>("view/status-mail/" + id);
  const { data } = response;
  return data;
}
