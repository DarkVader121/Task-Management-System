import { Button } from "@material-tailwind/react";
import { useStore } from '../stores';

const CompleteTask = ({index}) => {
    const { dispatch } = useStore();
    const handleCompleteTask = () => {
        dispatch({
            type: 'COMPLETE_TASK',
            index: index,
            payload: { completed: true }
        });
    }

    return (
        <>
            <Button color='blue' className='flex justify-center w-80' onClick={handleCompleteTask}>
                Complete Task
            </Button>
        </>
    )
}

export default CompleteTask