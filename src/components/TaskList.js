import React from 'react'
import '../tasklist.css'

function TaskList(props) {
    const { taskList, removeTask, checkTask } = props
    const tareas = taskList.map(task => {
      return <li 
              key={task.id} 
              className='task'>
                <p className={task.done ? 'task-text done' : 'task-text'}
                  onClick={() => checkTask(task.id)}>
                  {task.text}
                </p>
                <button className='delete-task' onClick={() => removeTask(task.id)}>
                  x
                </button>
              </li>
   })
    return (
            <>
                <ul className="task-list">
                  {tareas}
                </ul>  
            </>
            )
}

export default TaskList