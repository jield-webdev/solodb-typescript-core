import { Setup } from '../../interfaces/setup';
/** Adds an equipment to a setup; returns the updated setup. */
export default function createSetupEquipment({ setupId, equipmentId, }: {
    setupId: number;
    equipmentId: number;
}): Promise<Setup>;
