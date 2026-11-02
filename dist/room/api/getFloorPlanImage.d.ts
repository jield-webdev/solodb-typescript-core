export default function getFloorPlanImage(params: {
    url: string;
} | {
    id: number;
    lastUpdate: number;
    ext: string;
}): Promise<Blob>;
