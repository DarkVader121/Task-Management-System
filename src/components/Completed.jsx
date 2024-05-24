import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";

const Completed = () => {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
     <div className=''>
        <div className='flex align-center'>
            <i className="fa-solid fa-circle-check text-4xl"></i>
            <Typography  variant="h1" id="Inter" className="font-bold lg:text-3xl ml-3">
                Completed
            </Typography>
        </div>
        <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 6}>
            <AccordionHeader onClick={() => handleOpen(6)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 7}>
            <AccordionHeader onClick={() => handleOpen(7)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 8}>
            <AccordionHeader onClick={() => handleOpen(8)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 9}>
            <AccordionHeader onClick={() => handleOpen(9)} > 
                <Typography  variant="h1" id="Inter" className="lg:text-xl">
                    What is Material Tailwind?
                </Typography>
            </AccordionHeader>
            <AccordionBody>
                <Typography  variant="h1" id="Inter" className="lg:text-sm mb-1 text-blue-500">
                        Date Completed: May 13th, 2024
                </Typography>
                <Typography  variant="h1" id="Inter" className="lg:text-base">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </Typography>
               
            </AccordionBody>
        </Accordion>
     </div>
      );
}

export default Completed