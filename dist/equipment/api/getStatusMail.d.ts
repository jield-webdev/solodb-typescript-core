import { StatusMail } from '../../../equipment/interfaces/statusMail';
export default function getStatusMail({ id }: {
    id: number;
}): Promise<StatusMail>;
