'use client';

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment } from 'react';
import { CalendarEvent } from './CalendarView';
import { ClipboardList, Clock, FileText, Trash2, XCircle } from 'lucide-react';

export default function ViewTaskModal({
  isOpen,
  onClose,
  task,
  onDelete,
}: {
  isOpen: boolean;
  onClose: () => void;
  task: CalendarEvent | null;
  onDelete: () => void;
}) {
  if (!task) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left shadow-xl transition-all">
                <DialogTitle className="text-2xl font-bold text-purple-600 mb-4 text-center flex items-center justify-center gap-2">
                  <ClipboardList className="w-6 h-6" />
                  {task.title}
                </DialogTitle>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="font-medium text-purple-500">Time:</span>
                    <span>
                      {task.start.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}{' '}
                      –{' '}
                      {task.end.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <FileText className="w-5 h-5 mt-1 text-purple-500" />
                    <div>
                      <p className="font-medium text-purple-500 mb-1">
                        Description:
                      </p>
                      <p className="whitespace-pre-wrap text-gray-800">
                        {task.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    onClick={onDelete}
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                  >
                    <XCircle className="w-4 h-4" />
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
