import React from 'react'
import {
    Typography,
} from "@material-tailwind/react";

const Completed = () => {
    return (
     <>
          <div className='flex align-center'>
                <i className="fa-solid fa-circle-check text-4xl"></i>
                <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                    Completed
                </Typography>
            </div>
     </>
      );
}

export default Completed