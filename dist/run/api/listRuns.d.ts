import { Run } from '../interfaces/run';
import { Equipment } from '../../equipment/interfaces/equipment';
import { ApiFormattedResponse } from '../../core/interfaces/response';
export default function listRuns({ environment, firstUnfinishedStepEquipment, availableAsParentForRun, }: {
    environment?: string;
    firstUnfinishedStepEquipment?: Equipment;
    availableAsParentForRun?: Run;
}): Promise<ApiFormattedResponse<Run>>;
