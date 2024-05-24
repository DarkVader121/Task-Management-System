import React from 'react'
import {
    Typography,
} from "@material-tailwind/react";


const NewTask = () => {
    return (
     <>
        <div className='flex align-center'>
            <i className="fa-solid fa-file text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                New Task
            </Typography>
        </div>
     </>
      );
}

export default NewTask