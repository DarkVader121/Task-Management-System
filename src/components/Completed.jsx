import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";
import { useStore } from '../stores';

const Completed = () => {
    const [open, setOpen] = useState(0); // Initially no accordion is open
    const handleOpen = (value) => setOpen(open === value ? null : value);
    const { state } = useStore();
    const { todos } = state;
    const [completeTodos, setCompleteTodos] = useState([]);

    useEffect(() => {
        // Filter out the completed todos
        console.log("filtering", todos); 
        const filteredTodos = todos.filter(todo => todo.completed);
        setCompleteTodos(filteredTodos);
    }, [todos]);

    return (
        <div>
            <div className='flex align-center'>
                <i className="fa-solid fa-circle-check text-4xl"></i>
                <Typography variant="h1" className="font-bold lg:text-3xl ml-3">
                    Completed
                </Typography>
            </div>
            {completeTodos.length > 0 ? (
                completeTodos.map((todo, index) => (
                    <Accordion key={todo.id} open={open === index}>
                        <AccordionHeader onClick={() => handleOpen(index)}>
                            <Typography variant="h1" className="lg:text-xl">
                                {todo.title}
                            </Typography>
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography variant="h1" className="lg:text-sm mb-1 text-blue-500">
                                Date Completed: {todo.dateCompleted} {/* Adjust according to your data structure */}
                            </Typography>
                            <Typography variant="h1" className="lg:text-base">
                                {todo.description}
                            </Typography>
                        </AccordionBody>
                    </Accordion>
                ))
            ) : (
                <Typography variant="h1" className="text-xl mt-4">
                    No tasks completed yet.
                </Typography>
            )}
        </div>
    );
}

export default Completed;
