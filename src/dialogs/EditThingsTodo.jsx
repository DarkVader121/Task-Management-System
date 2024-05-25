import React, {useState} from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea, Typography } from "@material-tailwind/react";
import { format } from 'date-fns';


export function EditThingsTodo( { todo } ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    return (
        <>
            <Button color='blue' className='flex justify-center w-80'  onClick={handleOpen}>
                Complete Task
            </Button>
            <Dialog className="p-5" open={open} handler={handleOpen}>
                <DialogHeader>
                    <Input variant="static" label="Title" placeholder="Description" size="lg" value={title} onChange={(e) => {setTitle (e.target.value) }}/>
                </DialogHeader>
                <DialogBody>
                    <Typography  variant="h1" id="Inter" className="lg:text-sm text-red-400">
                        {`Deadline: ${format(new Date(todo.deadline), 'EEE MMM dd yyyy')}`}
                    </Typography>
                    <br/>
                    <Textarea label="Message"  value={description} onChange={(e) => { setDescription(e.target.value) }}/>
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
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                </Button>
                </DialogFooter>
        </Dialog>
        </>
    )
}