import React from 'react'
import { useState } from 'react'
import {
    Typography,
    Textarea,
} from "@material-tailwind/react";


const RandomNotes = () => {
    const [notes, setNotes] = useState("randomNotes");

    const handleOnChange = (event) => {
        setNotes(event.target.value);
    }
    
    return (
     <>
        <div className='flex align-center'>
            <i className="fa-solid fa-note-sticky text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                Random Notes
            </Typography>
        </div>
        <br/>
        <div>
            <Textarea label="Message" value={notes} onChange={handleOnChange} style={{ height: '10rem' }}/>
        </div>
     </>
      );
}

export default RandomNotes