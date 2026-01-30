import { RunStep } from '../../../index';
import { AxiosResponse } from 'axios';
export default function finishStep(runStep: RunStep): Promise<AxiosResponse<RunStep>>;
