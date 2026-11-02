import { Monitor } from '../interfaces/monitor';
import { ApiFormattedResponse } from '../../core/interfaces/response';
import { Equipment } from '../../equipment/interfaces/equipment';
export default function listMonitors({ equipment, adHoc, pageSize, page, }: {
    equipment?: Equipment;
    /** Defaults to true (previous behaviour); pass false to omit the ad_hoc filter */
    adHoc?: boolean;
    pageSize?: number;
    page?: number;
}): Promise<ApiFormattedResponse<Monitor>>;
