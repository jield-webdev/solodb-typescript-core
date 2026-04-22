import { ApiFormattedResponse } from '../../../core/interfaces/response';
import { ChemicalContainerExternalLabel } from '../../../chemical/interfaces/chemical/container/chemicalContainerExternalLabel';
export default function listChemicalContainerExternalLabels({ qrCodeContent, }: {
    qrCodeContent: string;
}): Promise<ApiFormattedResponse<ChemicalContainerExternalLabel>>;
