import Header from './components/Header'
import Balance from './components/Balance'
import HistoryBalance from './components/HistoryBalance'
import { BalanceProvider } from './context/BalanceContext';
import Action from './components/Action';

export default function Home() {
  return (
    <BalanceProvider>
      <div className="
        h-screen flex items-center justify-center bg-slate-950">
          <div className="flex flex-col items-center justify-center w-2/4">
          <Header />
          <Balance />
          <HistoryBalance />
          <Action />
        </div>
      </div>
    </BalanceProvider>
  );
}
