import {Container} from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import FilterTask from "../components/FilterTask/FilterTask"
import Form from "../components/Form/Form";
import {useState} from "react";
import taskMock from "../mocks/taskMock";
import { Task } from "../models";

const MainPage = () => {
    const [tasks, setTasks] = useState<Task[]>(taskMock)
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

    function deleteTask(id: string) {
       setTasks((prevTasks)=> prevTasks.filter((task)=> task.id !==id) )
    }

    function filterTask(value:string) {
        setFilteredTasks((prevTasks) => tasks.filter((task,i)=> task.timeToDo === Number(value)))
    }

    return(
        <Container sx={{pt:5, textAlign:'left'}}>
            <h2>Add Task</h2>
            <Form setTasks={setTasks} tasks={tasks}/>
            <h2>Filter Task</h2>
            <FilterTask tasks={tasks} filterTask={filterTask}/>
            <h2>Tasks List</h2>
            <TaskList tasks={tasks} filteredTasks={filteredTasks} deleteTask={deleteTask}/>
        </Container>
       
    )
}

export default MainPage