import React, {useState} from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea, Typography } from "@material-tailwind/react";
import { format } from 'date-fns';
import { useStore } from '../stores';

export function EditThingsTodo( { todo, index } ) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const { dispatch } = useStore();

    const handleUpdate = () => {
        dispatch({
            type: 'UPDATE_TODO',
            index: index,
            payload: { title, description }
        });
        setOpen(false); // Close the modal or editing view after update
    };
    
    return (
        <>
            <i className="fa-solid fa-pen-to-square text-2xl ml-5 cursor-pointer" onClick={handleOpen}></i>
            <Dialog className="p-5" open={open} handler={handleOpen}>
                <DialogHeader>
                    <Input variant="static" label="Title" placeholder="Description" size="lg" value={title} onChange={(e) => {setTitle (e.target.value) }}/>
                </DialogHeader>
                <DialogBody>
                    <Typography  variant="h1" id="Inter" className="lg:text-sm text-red-400">
                        {`Deadline: ${format(new Date(todo.deadline), 'EEE MMM dd yyyy')}`}
                    </Typography>
                    <br/>
                    <Textarea label="Description"  value={description} onChange={(e) => { setDescription(e.target.value) }}/>
                </DialogBody>
                <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleUpdate}>
                    <span>Confirm</span>
                </Button>
                </DialogFooter>
        </Dialog>
        </>
    )
}