import axios from "axios";
import { ServiceEventReport } from "@jield/solodb-typescript-core/service/interfaces/service/event/serviceEventReport";

export default async function getServiceEventReport({ id }: { id: number }) {
  let response = await axios.get<ServiceEventReport>("view/service/event/report/" + id);
  const { data } = response;
  return data;
}
