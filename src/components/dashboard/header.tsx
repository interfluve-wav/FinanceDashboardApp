import { Bell, PiggyBank, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <PiggyBank className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">FinanceFlow</h1>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}