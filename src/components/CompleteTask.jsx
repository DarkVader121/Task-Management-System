import { Button } from "@material-tailwind/react";
import { useStore } from '../stores';
import React, {useState} from 'react'


const CompleteTask = ({index}) => {
    const { dispatch } = useStore();
    const [btnloading, setLoading ] = useState(false); 

    const handleCompleteTask = () => {
        setLoading(true);
        
        // Set a timeout to stop loading after 5 seconds
        setTimeout(() => {
            dispatch({
                type: 'COMPLETE_TASK',
                index: index,
                payload: { completed: true }
            });

            setLoading(false);
        }, 2000); // 5000 milliseconds equals 5 seconds
    }

    return (
        <>
            <Button color='blue' className='flex justify-center w-80' onClick={handleCompleteTask} loading={btnloading}>
                Complete Task
            </Button>
        </>
    )
}

export default CompleteTask