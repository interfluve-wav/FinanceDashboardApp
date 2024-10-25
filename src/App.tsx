import { useState } from 'react';
import { DollarSign, TrendingUp, CreditCard, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Chart } from '@/components/ui/chart';
import { Header } from '@/components/dashboard/header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { TransactionList } from '@/components/dashboard/transaction-list';

function App() {
  const [savings, setSavings] = useState(78);

  const chartData = [
    { name: 'Jan', total: 2400 },
    { name: 'Feb', total: 1398 },
    { name: 'Mar', total: 9800 },
    { name: 'Apr', total: 3908 },
    { name: 'May', total: 4800 },
    { name: 'Jun', total: 3800 },
  ];

  const recentTransactions = [
    { name: 'Grocery Shopping', amount: -120, date: 'Today' },
    { name: 'Salary Deposit', amount: 3500, date: 'Yesterday' },
    { name: 'Netflix Subscription', amount: -15, date: '2 days ago' },
    { name: 'Freelance Payment', amount: 850, date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatsCard
            icon={DollarSign}
            title="Total Balance"
            value="$12,560"
            iconColor="text-green-700 dark:text-green-300"
            iconBg="bg-green-100 dark:bg-green-900"
          />
          <StatsCard
            icon={TrendingUp}
            title="Monthly Savings"
            value="$3,240"
            iconColor="text-blue-700 dark:text-blue-300"
            iconBg="bg-blue-100 dark:bg-blue-900"
          />
          <StatsCard
            icon={CreditCard}
            title="Monthly Expenses"
            value="$2,130"
            iconColor="text-purple-700 dark:text-purple-300"
            iconBg="bg-purple-100 dark:bg-purple-900"
          />
          <Card className="p-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Savings Goal</p>
              <Progress value={savings} className="h-2" />
              <p className="text-sm text-muted-foreground text-right">{savings}%</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <Card className="p-6">
              <Tabs defaultValue="expenses" className="space-y-4">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="expenses">Expenses</TabsTrigger>
                    <TabsTrigger value="income">Income</TabsTrigger>
                  </TabsList>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Transaction
                  </Button>
                </div>
                <TabsContent value="expenses">
                  <Chart data={chartData} />
                </TabsContent>
                <TabsContent value="income">
                  <Chart data={chartData} />
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <TransactionList transactions={recentTransactions} />
        </div>
      </div>
    </div>
  );
}

export default App;