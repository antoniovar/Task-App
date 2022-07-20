import Task from "./Task.jsx";
import { useState } from "react";

function TaskList({tasks}) {
  const [state, setState] = useState('false');
  const changeState = () => {
    if(state=='false'){
      setState('true')
    }
    else{
      setState('false')
    }
  }
  return(
    <ul>
        <li><input type="checkBox" onClick={changeState}/><Task done={state}>{tasks}</Task></li>
    </ul>
  );
}

export default TaskList;