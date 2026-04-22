import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Service } from '../interfaces/service';
export default function listServices({ equipmentId, }: {
    equipmentId?: number;
}): Promise<ApiFormattedResponse<Service>>;
