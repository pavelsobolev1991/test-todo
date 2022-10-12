import {Button, Box, FormControl, TextField, FormLabel} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import {BaseSyntheticEvent} from "react";
import {Task} from "../../models";
import { v4 as uuidv4 } from 'uuid';

export interface FormProps {
    tasks: Task[]
    setTasks:Dispatch<SetStateAction<Task[]>>
}

const FormTask = ({setTasks,tasks}: FormProps) => {
    const [formState, setFormState] = useState<Task>({
        id: '',
        type: '',
        description:'',
        timeToDo: 0
    })

    const [error,setError] = useState(false)

    const handleInputChange = (event:BaseSyntheticEvent) => {
            const target = event.target
            const name = target.name
            setFormState(prevState => ({...prevState, id: uuidv4(), [name]: target.value}));
    }

    const handleSubmit = (event:BaseSyntheticEvent) => {
        event.preventDefault();

        setError(false)

        const type = document.querySelector('#type') as HTMLInputElement
        const description = document.querySelector('#description') as HTMLInputElement
        const timeToDo = document.querySelector('#timeToDo') as HTMLInputElement

        if (type.value.trim().length === 0 || description.value.trim().length === 0 || timeToDo.value.trim().length === 0 ) {
            setError((prevState)=>!prevState);
            return;
         }

        setTasks(prevState => [...prevState, formState]);
    }

    return(
        <>
        <Box sx={{borderBottom:'1px solid black', mb:'30px', display:'flex', flexDirection: 'row'}}>
            <FormControl sx={{display:'flex', flexDirection: 'row', justifyContent:'space-between', mb:'30px', width: '100%'}}>
                <FormLabel htmlFor="type" sx={{display:'flex', flexDirection: 'column'}}>
                    Task Type
                    <TextField error={error} value={formState.type} onChange={handleInputChange} type="text" name='type' id='type'/>
                </FormLabel>
                <FormLabel htmlFor="description" sx={{display:'flex', flexDirection: 'column'}}>
                     Description
                     <TextField error={error} value={formState.description} onChange={handleInputChange} type="text" name='description' id='description'/>
                 </FormLabel>
                  <FormLabel htmlFor="timeToDo" sx={{display:'flex', flexDirection: 'column'}}>
                    Time to do
                <TextField error={error} value={formState.timeToDo} onChange={handleInputChange} type="text" name='timeToDo' id='timeToDo' />
                  </FormLabel>
                <Button variant='outlined' type='submit' onClick={handleSubmit}>Add</Button>
            </FormControl>
        </Box>
        </>
    )

}

export default FormTask;