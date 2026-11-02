/** Closes the issue (sets date_closed); the response body is empty. */
export default function deleteIssue({ id }: {
    id: number;
}): Promise<void>;
