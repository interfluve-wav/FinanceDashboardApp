import { Card } from '@/components/ui/card';

interface Transaction {
  name: string;
  amount: number;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
          >
            <div>
              <p className="font-medium">{transaction.name}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
            <p
              className={`font-semibold ${
                transaction.amount > 0
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}