import { Run } from '../../../run/interfaces/run';
import { Equipment } from '../../../equipment/interfaces/equipment';
import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { StatusMail } from '../../../equipment/interfaces/statusMail';
import { Room } from '../../../room/interfaces/room';
import { FilterData } from '../../../core/interfaces/filter';
export default function listEquipment({ environment, run, room, statusMail, hasWorkstationComponents, page, pageSize, query, filter, order, direction }: {
    environment?: string;
    run?: Run;
    room?: Room;
    statusMail?: StatusMail;
    hasWorkstationComponents?: boolean;
    page?: number;
    pageSize?: number;
    query?: string;
    filter?: FilterData;
    order?: string;
    direction?: "desc" | "asc";
}): Promise<ApiFormattedResponse<Equipment>>;
