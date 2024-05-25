import React from 'react'
import {
    Card,
    Typography,
  } from "@material-tailwind/react";
  import { Completed, ThingsTodo, NewTask, RandomNotes } from '../components'

const Hero = () => {
    return (
        <div className='flex flex-col justify-between items-center h-screen bg-light-blue-500 py-5'>
            <Card style={{ width: '110rem' }}>
                <Typography  variant="h1" id="Inter" className="font-bold lg:text-5xl flex justify-center p-5">
                    Task Management System
                </Typography>
            </Card>

            <div className='grid grid-cols-4 gap-10' style={{ width: '110rem', height: '45rem' }}>
                <Card className='p-5 overflow-auto'>
                  <Completed/>
                </Card>
                <Card className='p-5 col-span-2 overflow-auto'>
                  <ThingsTodo />
                </Card>
                <div className='min-h-max flex flex-col justify-between' >
                  <Card className='p-5'  style={{ height: '25rem' }}>
                    <NewTask/>
                  </Card>
                  <Card className='p-5 mt-3'  style={{ height: '17rem' }}  >
                    <RandomNotes/>
                  </Card>
                </div>
                
            </div>
        </div>
      );
}

export default Hero