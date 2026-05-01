import { File } from '../../core/interfaces/file';
export default function deleteFile({ file }: {
    file: File;
}): Promise<void>;
