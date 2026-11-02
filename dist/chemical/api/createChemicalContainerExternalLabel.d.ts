import { ChemicalContainerExternalLabel } from '../interfaces/chemical/container/chemicalContainerExternalLabel';
export default function createChemicalContainerExternalLabel({ container, qr_code_content, }: {
    container: number;
    /** Required by solodb (400 when missing or already in use) */
    qr_code_content: string;
}): Promise<ChemicalContainerExternalLabel>;
