import React from 'react'
import {
    Typography,
} from "@material-tailwind/react";

const ThingsTodo = () => {
    return (
     <>
        <div className='flex align-center'>
            <i className="fa-solid fa-clock text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                Things To Do
            </Typography>
        </div>
     </>
      );
}

export default ThingsTodo