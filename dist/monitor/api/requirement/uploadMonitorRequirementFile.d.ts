import { MonitorRequirement } from '../../interfaces/monitorRequirement';
export default function uploadMonitorRequirementFile({ requirement, filename, type, content, }: {
    requirement: MonitorRequirement;
    filename: string;
    type: string;
    /** Data URL (e.g. from FileReader.readAsDataURL) */
    content: string;
}): Promise<Record<string, unknown>>;
