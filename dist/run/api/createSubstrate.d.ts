import { Substrate } from '../../substrate/interfaces/substrate';
export default function createSubstrate({ run_id, substrate_id, amount, }: {
    run_id: number;
    substrate_id: number;
    amount: number;
}): Promise<Substrate>;
