import React, {useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToDoContext } from "../contexts/ToDoContext";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';
import { unmountComponentAtNode, render } from "react-dom";

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
  
  const handleDelete = (e) => {
    let ids = []
    todos.map(todo => {
      return ids.push(todo.id)
    }
    )
  
    let item = ids.filter(element => element == e.target.value)
    unmountComponentAtNode(document.getElementById(item));
  }

  return(
    <div className="to-do-list" style={{color: theme.syntax, background: theme.bg}}>
    <ul>
      {todos.map(todo => {
        return(
          <div>
      <li id={todo.id} key={todo.id} style={{background: theme.ui}}> {todo.title}  <Button  type={todo.title} value={todo.id} onClick={handleDelete}> Delete </Button> </li>  
     
      </div>
        )
      })}
    </ul>
      <TaskForm addTask={addTask}/>
  </div>
  )
}

export default ToDoList
