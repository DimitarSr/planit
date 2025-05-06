import { protectPage } from '@/lib/authProtection';
import CalendarView from '@/components/CalendarView';


export const metadata = {
  title: 'Your Calendar | PlanIt',
  description: 'View and manage your tasks with our intuitive calendar.',
};


export default async function CalendarPage() {
  await protectPage();

  return <CalendarView />;
}
