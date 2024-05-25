import { Input, Popover, PopoverHandler, PopoverContent, Typography, Button, Textarea} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useStore } from '../stores';
import React, {useState} from 'react'

export default function NewTask () {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const { dispatch } = useStore(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

     // Create a new todo object
    const newTodo = {
      id: new Date().getTime(), // Using timestamp to generate a unique ID
      title,
      description,
      deadline,
      completed: false
    };

    // Dispatch the add todo action
    dispatch({ type: 'ADD_TODO', payload: newTodo });

    // Clear form fields after submission
    setTitle('');
    setDescription('');
    setDeadline('');
  }

    return (
     <>
        <div className='flex align-center'>
            <i className="fa-solid fa-file text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                New Task
            </Typography>
        </div>
        <form onSubmit={handleSubmit}>
        <br/>
        <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Select a Deadline"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline ? format(deadline, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker mode="single" selected={deadline} onSelect={setDeadline} showOutsideDays className="border-0" classNames={{   caption: "flex justify-center py-2 mb-4 relative items-center",   caption_label: "text-sm font-medium text-gray-900",   nav: "flex items-center",   nav_button:"h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",   nav_button_previous: "absolute left-1.5",   nav_button_next: "absolute right-1.5",   table: "w-full border-collapse",   head_row: "flex font-medium text-gray-900",   head_cell: "m-0.5 w-9 font-normal text-sm",   row: "flex w-full mt-2",   cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",   day: "h-9 w-9 p-0 font-normal",   day_range_end: "day-range-end",   day_selected:     "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",   day_today: "rounded-md bg-gray-200 text-gray-900",   day_outside:     "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",   day_disabled: "text-gray-500 opacity-50",   day_hidden: "invisible", }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
        </Popover>
        <br/>
        <Input size="lg" label="Title" type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br/>
        <Textarea size="lg" label="Description" type='text' value={description} onChange={(e) => setDescription(e.target.value)}  />

        <Button color="amber" className='mt-3'  size="lg" type="submit">Create Task</Button>
        </form>
      </>
      );
}

