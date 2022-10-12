import {Box, TextField, FormLabel, styled} from "@mui/material";
import {BaseSyntheticEvent} from "react";
import {Task} from "../../models";

export interface FilterTask {
  tasks: Task[]
  filterTask: (id:string)=> void;
}

const FilterTask = ({filterTask,tasks}: FilterTask) => {

  const handleFilterTasks = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    filterTask(event.target.value)
}

  return(
    <>
    <Box sx={{borderBottom:'1px solid black', mb:'30px', display:'flex', flexDirection: 'row'}}>

             <FormLabel htmlFor="timeToDo" sx={{display:'flex', flexDirection: 'column'}}>
                Filter by Time to do
            <TextField onChange={handleFilterTasks} type="text" name='timeToDo' id='timeToDo' />
              </FormLabel> 

    </Box>
    </>
)

}

export default FilterTask;