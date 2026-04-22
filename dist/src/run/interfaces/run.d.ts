import { BatchCard } from '../../../run/interfaces/run/batchCard';
import { HoldCode } from '../../../run/interfaces/run/holdCode';
import { Priority } from '../../../run/interfaces/run/priority';
import { Project } from '../../../core/interfaces/project';
import { RunStep } from '../../../run/interfaces/runStep';
import { TrayType } from '../../../run/interfaces/trayType';
import { RunTray } from '../../../run/interfaces/run/runTray';
import { User } from '../../../core/interfaces/user';
export declare enum RunTypeEnum {
    RESEARCH = 1,
    PRODUCTION = 2
}
export interface Run {
    id: number;
    label: string;
    name: string;
    amount_of_steps: number;
    run_type: RunTypeEnum;
    responsible: User;
    status: string;
    first_unfinished_step?: RunStep;
    last_finished_step?: RunStep;
    has_batch_card: boolean;
    batch_card?: BatchCard;
    hold_code?: HoldCode;
    priority?: Priority;
    project: Project;
    amount_root_parts: number;
    tray_type?: TrayType;
    run_trays: RunTray[];
    access: {
        edit: boolean;
    };
    date_created: Date;
    start_date: Date | null;
    last_update: Date | null;
    team: {
        id: number;
        name: string;
    };
    group: {
        id: number;
        name: string;
    };
}
