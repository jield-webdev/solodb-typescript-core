import { Run } from '../interfaces/run';
import { Equipment } from '../../equipment/interfaces/equipment';
import { ApiFormattedResponse } from '../../core/interfaces/response';
export type RunListGeneralFilter = "involved" | "own" | "has_batch_card" | "has_hold_code" | "has_no_hold_code" | "trained";
export default function listRuns({ environment, operator, firstUnfinishedStepEquipment, availableAsParentForRun, query, order, direction, pageSize, page, runLabel, generalFilter, }: {
    environment?: string;
    /** When true only open runs with unfinished steps are returned (operator view); sends operator=1. */
    operator?: boolean;
    /**
     * Filter on the next (first unfinished step) equipment.
     * Equipment: only runs where this equipment is next. null: only runs without a next equipment.
     * undefined: no filter.
     */
    firstUnfinishedStepEquipment?: Equipment | null;
    availableAsParentForRun?: Run;
    query?: string;
    order?: string;
    direction?: string;
    pageSize?: number;
    page?: number;
    runLabel?: string;
    generalFilter?: RunListGeneralFilter[];
}): Promise<ApiFormattedResponse<Run>>;
