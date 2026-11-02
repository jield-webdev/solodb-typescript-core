import { BatchCard } from './run/batchCard';
import { HoldCode } from './run/holdCode';
import { Priority } from './run/priority';
import { Project } from '../../core/interfaces/project';
import { RunStep } from './runStep';
import { TrayType } from './trayType';
import { RunTray } from './run/runTray';
import { User } from '../../core/interfaces/user';
export declare enum RunTypeEnum {
    RESEARCH = 1,
    PRODUCTION = 2
}
export interface Run {
    id: number;
    label: string;
    name: string;
    motivation: string;
    amount_of_steps: number;
    run_type: RunTypeEnum;
    responsible: User;
    status: string;
    first_unfinished_step: RunStep | null;
    last_finished_step?: RunStep;
    has_batch_card: boolean;
    batch_card?: BatchCard;
    hold_code?: HoldCode;
    priority?: Priority;
    project: Project;
    tray_type?: TrayType;
    run_trays: RunTray[];
    access: {
        edit: boolean;
    };
    date_created: string;
    start_date: string | null;
    last_update: string | null;
    team: {
        id: number;
        name: string;
    };
    group: {
        id: number;
        name: string;
    };
}
