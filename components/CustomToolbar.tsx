'use client';

import { ToolbarProps, Views } from 'react-big-calendar';
import { CalendarEvent } from './CalendarView';
import {
  ChevronLeft,
  ChevronRight,
  CalendarClock,
  CalendarDays,
  CalendarSearch,
} from 'lucide-react';

export default function CustomToolbar(
  props: ToolbarProps<CalendarEvent, object>
) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
      <div className="text-xl sm:text-2xl font-bold text-purple-600 text-center sm:text-left">
        {props.label}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => props.onView(Views.MONTH)}
          className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition ${
            props.view === Views.MONTH
              ? 'bg-purple-600 text-white shadow-lg'
              : 'border border-purple-400 text-purple-700 hover:bg-purple-100'
          }`}
        >
          <CalendarDays className="w-4 h-4" />
          Month
        </button>
        <button
          onClick={() => props.onView(Views.WEEK)}
          className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition ${
            props.view === Views.WEEK
              ? 'bg-purple-600 text-white shadow-lg'
              : 'border border-purple-400 text-purple-700 hover:bg-purple-100'
          }`}
        >
          <CalendarSearch className="w-4 h-4" />
          Week
        </button>
        <button
          onClick={() => props.onView(Views.DAY)}
          className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition ${
            props.view === Views.DAY
              ? 'bg-purple-600 text-white shadow-lg'
              : 'border border-purple-400 text-purple-700 hover:bg-purple-100'
          }`}
        >
          <CalendarClock className="w-4 h-4" />
          Day
        </button>
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => props.onNavigate('PREV')}
          className="flex items-center gap-1 px-3 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={() => props.onNavigate('TODAY')}
          className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition shadow-md font-medium"
        >
          Today
        </button>
        <button
          onClick={() => props.onNavigate('NEXT')}
          className="flex items-center gap-1 px-3 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition shadow-md"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
