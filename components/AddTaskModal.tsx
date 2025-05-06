'use client';


import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';

type TaskForm = {
  title: string;
  start: Date;
  end: Date;
  desc: string;
};

export default function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
  selectedDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: TaskForm) => void;
  selectedDate: Date;
}) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {
    if (!title || !start || !end || !desc) return;

    const startDateTime = new Date(`${selectedDate.toDateString()} ${start}`);
    const endDateTime = new Date(`${selectedDate.toDateString()} ${end}`);

    if (startDateTime >= endDateTime) {
      toast.error('End time must be after start time');
      return;
    }

    onAddTask({
      title,
      desc,
      start: startDateTime,
      end: endDateTime,
    });


    setTitle('');
    setStart('');
    setEnd('');
    setDesc('');
    onClose();
  };

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
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                <DialogTitle className="text-lg font-bold text-gray-900 mb-4">
                  Create a new task
                </DialogTitle>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="E.g. Team meeting"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Start
                      </label>
                      <input
                        type="time"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        End
                      </label>
                      <input
                        type="time"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      maxLength={300}
                      className="mt-1 block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Add some additional information (max. 300 characters)..."
                    />
                    <div className="mt-1 text-xs text-gray-500 text-right">
                      {desc.length}/300 characters
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={onClose}
                    className="mr-2 px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Create
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
