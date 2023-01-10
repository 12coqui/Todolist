import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import TaskList from './components/TaskList';

function App() {

const tasks = JSON.parse(localStorage.getItem('taskBackup')) || []

const [taskList, setTaskList] = useState(tasks)

const addTask = (input) => {
  if(input == '') return
    let newTask = {
      text: input,
      id: uuidv4(),
      done: false
    }

    const taskUpdated = [...taskList, newTask]
    setTaskList(taskUpdated)
    console.log(taskList)
    localStorage.setItem('taskBackup', JSON.stringify( taskUpdated ))
  }

const [value, setValue] = useState('')

const removeTask = (id) => {
setTaskList(taskList.filter(task => id !== task.id));
const newStorage = JSON.parse(localStorage.getItem('taskBackup')).filter(task => id !== task.id)
localStorage.setItem('taskBackup', JSON.stringify( newStorage ))
}

const checkTask = (id) => {
  const newTaskList = taskList.map(item => {
    if(item.id == id){
        item.done = !item.done
    }
    return item})
  setTaskList(newTaskList)
}  

return (
    <div className="App">
      <h1>To Do List</h1>
      <form action="#" onSubmit={(e) => {addTask(value); e.preventDefault()}}>
        <div className="input-container">
          <input type='text' placeholder='Start typing' id='input' name='input' value={value} onChange={(e) => {setValue(e.target.value)}}/>
          <button type='submit'>+</button>
        </div>
      </form>
      <TaskList 
      taskList={taskList}
      removeTask={removeTask}
      checkTask={checkTask}
      />
    </div>
  );
}

export default App;
