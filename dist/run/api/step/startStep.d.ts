import { RunStep } from '../../../index';
import { AxiosResponse } from 'axios';
export default function startStep(runStep: RunStep): Promise<AxiosResponse<RunStep>>;
