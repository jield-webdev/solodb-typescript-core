import { RunStepPart } from '../../../../index';
import { RunTray } from '../../../interfaces/run/runTray';
import { AxiosResponse } from 'axios';
export default function updateRunStepPartTray(stepPart: RunStepPart, tray: RunTray | null, tray_row: number, tray_column: number, update_subsequent?: boolean, extra_tray_id?: number): Promise<AxiosResponse<RunStepPart>>;
