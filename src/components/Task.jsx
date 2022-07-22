import '../styles/Task.css'
import { useState } from 'react';


function Task (props) {
  const [complete, setComplete] = useState(false)
  const completed = () => {
    setComplete(!complete)
  };

  return(
    <div 
      id={props.id} 
      onClick={completed} 
      className={complete ? 'tarea completada' : 'tarea'}>
        {props.children}
    </div>    
  );
}

export default Task;