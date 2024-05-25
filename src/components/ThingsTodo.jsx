import React, {useEffect, useState } from 'react'
import {
    Typography,
    Card,
    Button,
} from "@material-tailwind/react";
import { useStore  } from '../stores'
import { format } from 'date-fns';

import { EditThingsTodo, DeleteThingsTodo } from '../dialogs';
import { CompleteTask } from '../components'


const ThingsTodo = () => {
    const { state } = useStore();
    const { todos } = state;
    const [activeTodos, setActiveTodos] = useState([]);

    useEffect(() => {
       // Filter out the completed todos
       console.log("filtering", todos); 
       const activeTodos = todos.filter(todo => !todo.completed);
       setActiveTodos(activeTodos);
    }, [todos]);

    return (
     <>
        <div className='flex align-center'>
            <i className="fa-solid fa-clock text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                Things To Do
            </Typography>
        </div>
        
        {activeTodos.length > 0 ? (
            activeTodos.map((todo, index) => (
                        <Card className="p-3 w-full bg-gray-200 mt-3" key={index}>
                            <div className='flex align-center justify-between'>
                                <div className="flex justify-start align-center">
                                    <Typography  variant="h1" id="Inter" className="font-bold lg:text-2xl">
                                        {todo.title}
                                    </Typography>
                                    <EditThingsTodo todo={todo} index={index}/>
                                </div>
                               <DeleteThingsTodo todo={todo} index={index}/>
                            </div>
                            <Typography  variant="h1" id="Inter" className="lg:text-sm text-red-400 mt-1">
                                {`Deadline: ${format(new Date(todo.deadline), 'EEE MMM dd yyyy')}`}
                            </Typography>

                            <Typography  variant="h1" id="Inter" className="lg:text-base mt-3">
                                {todo.description}
                            </Typography>
                            {todo.completed ? "Completed" : "Not Completed"}
                            <div className='flex justify-center min-w-full mt-5'>
                                <CompleteTask index={index}/>
                            </div>
                            
                        </Card>
                    ))
                ) : (
                    <Typography variant="h6" className="mt-4">
                        No todos yet!
                    </Typography>
                )}
     </>
      );
}

export default ThingsTodo