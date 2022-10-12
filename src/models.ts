export interface Task {
  id: string;
  type: string;
  description: string;
  timeToDo?: number
}

export interface TaskListProps {
  tasks: Task[];
  filteredTasks: Task[]
  deleteTask: (id:string)=> void;
}
