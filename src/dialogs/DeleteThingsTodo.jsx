import React, {useState} from "react";
import { Button, Dialog, DialogHeader, DialogFooter,Typography } from "@material-tailwind/react";
import { useStore } from '../stores';

export function DeleteThingsTodo( { todo } ) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const { dispatch } = useStore();

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_TODO',
            id: todo.id,
        });
        setOpen(false); // This ensures the modal or view is closed after deletion
    };

    
    return (
        <>
            <i className="fa-solid fa-trash text-2xl ml-5 cursor-pointer text-red-400 mr-3" onClick={handleOpen}></i>
            <Dialog className="p-5" open={open} handler={handleOpen}>
                <Typography  variant="h1" id="Inter" className="lg:text-2xl">
                    Do you want to delete this task? 
                </Typography>
                <br />
                <DialogHeader>
                <Typography  variant="h1" id="Inter" className="font-bold lg:text-2xl">
                   Title: {todo.title}
                </Typography>
                </DialogHeader>
                <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="blue" onClick={handleDelete}>
                    <span>Confirm</span>
                </Button>
                </DialogFooter>
        </Dialog>
        </>
    )
}