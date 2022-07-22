import '../styles/TaskList.css'
import Task from "./Task.jsx";

function TaskList({tasks}) {
  return(
    <ul className='TaskList'>
        {tasks.map((task, index)=>
          <li key={index}>
            <Task id={index}>{task}</Task>
          </li>)}
    </ul>
  );
}

export default TaskList;