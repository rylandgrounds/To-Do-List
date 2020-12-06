import React, {useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToDoContext } from "../contexts/ToDoContext";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from 'uuid';

const ToDoList  = () => {
  const {isLightTheme, light, dark } = useContext(ThemeContext)
  const {tasks} = useContext(ToDoContext)
  const theme = isLightTheme ? light : dark;

    const [todos, setTodos] = useState([
      { title: "Make the Perfect Cup of Coffee", id: 1 },
      { title: "Get a job", id: 2 },
      { title: "Dance", id: 3 },
    ]);
    const addTask = (title) => {
      
      setTodos([...todos, { title, id: uuidv4()}])
  }
  return(
    <div className="to-do-list" style={{color: theme.syntax, background: theme.bg}}>
    <ul>
      {todos.map(todo => {
        return(
      <li key={todo.id} style={{background: theme.ui}}> {todo.title} </li>  
        )
      })}
    </ul>
      <TaskForm addTask={addTask}/>
  </div>
  )
}

export default ToDoList
