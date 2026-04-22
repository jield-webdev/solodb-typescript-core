import { StatusMail } from '../interfaces/statusMail';
export default function getStatusMail({ id }: {
    id: number;
}): Promise<StatusMail>;
