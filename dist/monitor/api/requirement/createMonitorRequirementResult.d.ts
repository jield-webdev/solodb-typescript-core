import { MonitorRequirement } from '../../interfaces/monitorRequirement';
export default function createMonitorRequirementResult({ requirement, date, values, }: {
    requirement: MonitorRequirement;
    /** Date of the result (JS date/datetime string) */
    date: string;
    values: {
        logging_parameter_id: number;
        value: number | string;
    }[];
}): Promise<void>;
