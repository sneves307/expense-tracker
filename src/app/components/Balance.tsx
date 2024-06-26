'use client'
import { useBalance } from '../context/BalanceContext';
export default function Balance() {
    const { history } = useBalance();
    const totalBalance = history.reduce((total, item) => {
        return item.operator === '+' ? total + item.value : total - item.value;
    },0);
    return (
        <div className="container mx-auto text-slate-100 justify-start px-8 py-2 font-semibold">
            <h2>Balance</h2>
            <h2>{totalBalance.toFixed(2)}</h2>
        </div>
    );
}