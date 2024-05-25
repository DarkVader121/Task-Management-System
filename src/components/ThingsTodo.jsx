import React, {useEffect} from 'react'
import {
    Typography,
    Card,
    Button,
} from "@material-tailwind/react";
import { useStore  } from '../stores'

import { EditThingsTodo } from '../dialogs/EditThingsTodo';


const ThingsTodo = () => {
    const { state } = useStore();
    const { todos } = state;

    useEffect(() => {
        console.log('Todos have been updated:', todos);
    }, [todos]);
    return (
     <>
        <div className='flex align-center'>
            <i className="fa-solid fa-clock text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                Things To Do
            </Typography>
        </div>
        
        {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <Card className="p-3 w-full bg-gray-200 mt-3" key={index}>
                            <div className='flex align-center justify-between'>
                                <div className="flex justify-start align-center">
                                    <Typography  variant="h1" id="Inter" className="font-bold lg:text-2xl">
                                        {todo.title}
                                    </Typography>
                                    <i className="fa-solid fa-pen-to-square text-2xl ml-5 cursor-pointer" ></i>
                                </div>
                                <i className="fa-solid fa-trash text-2xl ml-5 cursor-pointer text-red-400 mr-3"></i>
                            </div>
                            <Typography  variant="h1" id="Inter" className="lg:text-sm text-red-400 mt-1">
                                {`Deadline: ${todo.deadline}`}
                            </Typography>

                            <Typography  variant="h1" id="Inter" className="lg:text-base mt-3">
                                {todo.description}
                            </Typography>
                            <div className='flex justify-center min-w-full mt-5'>
                                <EditThingsTodo todo={todo} />

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