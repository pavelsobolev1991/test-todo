import {IconButton, Typography,Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BaseSyntheticEvent } from "react";
import {Task} from "../../models";
import {ItemWrapperStyled} from "../../styleComponents"

export interface TaskProps {
    task: Task;
    deleteTask: (id:string)=> void;
}

export const TaskItem = ({task, deleteTask}:TaskProps) => {

    const handleDeleteTask= (event: BaseSyntheticEvent) => {
        event.preventDefault()
        deleteTask(event.currentTarget.id)
    }

return (
  <>
                <ItemWrapperStyled>
                    <Typography sx={{width:'20%', fontSize:20}}>{task.type}</Typography>
                    <Typography style={{width:'50%'}}>{task.description}</Typography>
                    <Typography style={{width:'20%'}}>{task.timeToDo}</Typography>
                    <Box style={{width:'10%'}}>
                        <IconButton
                            className="iconBtn" 
                            onClick={handleDeleteTask} 
                            id={task.id}
                            aria-label="close"
                            sx={{
                                color: (theme) => theme.palette.grey[500],
                            }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </ItemWrapperStyled>
            </>
)
}
