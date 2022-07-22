import './App.css';
import TaskList from './components/TaskList.jsx';
import Button from './components/Button.jsx'
import { useState } from 'react';

function App() {
  //Tasks List State
  const [list, setList] = useState([]);
  //Add task
  const addValue = () => {
    const val = document.getElementById('value').value;
    if(val!=''){
      setList([...list,val])
      document.getElementById('value').value = ''
    }    
  };
  //Delete tasks
  const deleteAll = () =>{
    setList([])
  };

  return (
    <div className='Main'>
      <h1>To-Do List</h1>
      <div className="App">
        <div className='Fila'>
          <input id='value' type='text' placeholder='Write your task here!' />
          <Button name='➕' little={true} func={addValue} /> 
        </div>
        <div className='Fila segunda'>
          <TaskList tasks={list}/>
        </div>
        <div className='Fila'>
          <Button name='CLEAR ALL TASKS' add={false} func={deleteAll}/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
