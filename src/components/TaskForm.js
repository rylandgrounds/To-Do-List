import React, { useState } from 'react'


const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
       addTask(title);
       setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Task Name:</label>
            <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input type='submit' value='add task'/>
        </form>
    )
}
export default TaskForm