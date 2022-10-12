import {TaskItem} from '../Task/TaskItem'
import { Typography, Box } from "@mui/material";
import {HeaderWrapperStyled} from "../../styleComponents"
import {TaskListProps} from "../../models";


const ListWithAllTasks = ({filteredTasks, tasks, deleteTask}: TaskListProps) => {
    console.log('check', )
    return(
        <Box>
            <HeaderWrapperStyled>
                <Typography style={{width:'20%'}}>Type</Typography>
                <Typography style={{width:'50%'}}>description</Typography>
                <Typography style={{width:'20%'}}>Time to do</Typography>
                <Box style={{width:'10%'}}></Box>
            </HeaderWrapperStyled>
            {
             (filteredTasks.length===0 && !!tasks.length) ?
                tasks.map((task, index) => <TaskItem key={index} task={task} deleteTask={deleteTask}/>) :
                filteredTasks.map((task, index) => <TaskItem key={index} task={task} deleteTask={deleteTask}/>)
                }
        </Box>
    )

    };

export default ListWithAllTasks;