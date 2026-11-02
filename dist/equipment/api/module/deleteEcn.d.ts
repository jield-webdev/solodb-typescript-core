/** Closes the ECN note (sets date_closed); the response body is empty. */
export default function deleteEcn({ id }: {
    id: number;
}): Promise<void>;
