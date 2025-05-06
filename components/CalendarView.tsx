'use client';

import { useEffect, useState } from 'react';
import {
  Calendar,
  dayjsLocalizer,
  Views,
  SlotInfo,
  View,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import { useUser } from '@clerk/nextjs';
import CustomToolbar from './CustomToolbar';
import '../app/globals.css';
import AddTaskModal from './AddTaskModal';
import ViewTaskModal from './ViewTaskModal';
import '../app/globals.css';
import { CalendarDays } from 'lucide-react';

export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  desc: string;
};

const localizer = dayjsLocalizer(dayjs);

export default function CalendarView() {
  const { user } = useUser();
  const [currentView, setCurrentView] = useState<View>('month');
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedTask, setSelectedTask] = useState<CalendarEvent | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      const formatted = data.map((task: CalendarEvent) => ({
        id: task.id,
        desc: task.desc,
        title: task.title,
        start: new Date(task.start),
        end: new Date(task.end),
      }));
      setEvents(formatted);
    };
    fetchEvents();
  }, []);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    setSelectedSlot(slotInfo.start);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    console.log('selected event:', event);
    setSelectedTask({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      desc: event.desc || '',
    });
    setIsViewModalOpen(true);
  };

  const handleDeleteTask = async () => {
    if (!selectedTask) return;

    console.log('Deleting task:', selectedTask);

    const res = await fetch('/api/tasks', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: selectedTask.id }),
    });

    if (res.ok) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedTask.id));
      setIsViewModalOpen(false);
      setSelectedTask(null);
    } else {
      console.error('Грешка при изтриване на задачата');
    }
  };

  const handleAddTask = async (task: {
    title: string;
    start: Date;
    end: Date;
    desc: string;
  }) => {
    const newTask = {
      title: task.title,
      start: task.start,
      end: task.end,
      desc: task.desc,
      userId: user?.id,
    };

    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });

    if (res.ok) {
      const createdTask = await res.json();

      setEvents((prev) => [
        ...prev,
        {
          id: createdTask.id,
          title: createdTask.title,
          start: new Date(createdTask.start),
          end: new Date(createdTask.end),
          desc: createdTask.desc,
        },
      ]);
    } else {
      console.error('Грешка при запис в базата');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e8e0fa] via-[#f0eaff] to-[#e5defc] text-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-10 border border-purple-300">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-6 flex items-center justify-center gap-2">
          <CalendarDays className="w-6 h-6 text-gray-500" />
          Your Personal Calendar
        </h1>

        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedDate={selectedSlot || new Date()}
          onAddTask={handleAddTask}
        />
        <ViewTaskModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          task={selectedTask}
          onDelete={handleDeleteTask}
        />

        <div className="overflow-x-auto">
          <div style={{ minWidth: '800px' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              selectable
              longPressThreshold={100}
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              view={currentView}
              date={date}
              onView={setCurrentView}
              onNavigate={setDate}
              views={[Views.MONTH, Views.WEEK, Views.DAY]}
              style={{ height: 600 }}
              components={{
                toolbar: CustomToolbar,
              }}
              eventPropGetter={(event) => ({
                style: {
                  borderLeft: '4px solid purple',
                },
                'data-id': event.id,
              })}
              formats={{
                timeGutterFormat: (date, culture, localizer) =>
                  localizer?.format(date, 'HH:mm', culture) ?? '',
                eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                  `${localizer?.format(start, 'HH:mm', culture) ?? ''} - ${
                    localizer?.format(end, 'HH:mm', culture) ?? ''
                  }`,
                dayFormat: (date, culture, localizer) => {
                  const day = localizer?.format(date, 'ddd', culture) ?? '';
                  const mapping: { [key: string]: string } = {
                    Sun: 'Sun',
                    Mon: 'Mon',
                    Tue: 'Tue',
                    Wed: 'Wed',
                    Thu: 'Thu',
                    Fri: 'Fri',
                    Sat: 'Sat',
                  };
                  return mapping[day] || day;
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
