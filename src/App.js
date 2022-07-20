import './App.css';
import TaskList from './components/TaskList.jsx';
import Button from './components/Button.jsx'
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const addValue = () => {
    const val = document.getElementById('value').value;
    if(val!=''){
      setList([...list,val])
      document.getElementById('value').value = ''
    }    
  }
  const deleteAll = () =>{
    setList([])
  }

  return (
    <div className="App">
      <TaskList tasks={list}/>
      <input id='value' type='text' placeholder='Write your task here!' />
      <Button name='ADD' func={addValue} />
      <Button name='Clear' func={deleteAll}/>
    </div>
  );
}

export default App;
