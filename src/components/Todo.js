import { useState } from "react"



const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if(task.trim()){
            setTasks((prevTasks)=> [...prevTasks, task]);
            setTask('')
        }
    }
    

    const handleRemoveTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, taskIndex)=> taskIndex !== index));
    }

  return (
    <div className="todo-list">
        <h1>Todo List</h1>
        <form onSubmit={handleAddTask} className='todo'>
            <input
            onChange={(e)=> setTask(e.target.value)} 
            type='text' 
            name='task' 
            value={task} 
            placeholder='Enter a task'/>
            <button type='submit'>Add</button>
           
        </form>
        <ul className="todo-container">
              { tasks.length === 0 ?(
                <p>Task is empty</p>
              ) :
                tasks.map((task,index)=>{
                 return( <li key={index}> {task}
                    <button onClick={()=>handleRemoveTask(index)}>Delete</button>
                </li>)
              })}
            </ul>
    </div>
  )
}

export default Todo