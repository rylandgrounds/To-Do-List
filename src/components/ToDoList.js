import React, {useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoList  = () => {
  const {isLightTheme, light, dark } = useContext(ThemeContext)
  const {tasks} = useContext(ToDoContext)
  const theme = isLightTheme ? light : dark;
  return(
    <div className="to-do-list" style={{color: theme.syntax, background: theme.bg}}>
    <ul>
      {tasks.map(task => {
        return(
      <li key={task.id} style={{background: theme.ui}}> {task.task} </li>  
        )
      })}
    </ul>
  </div>
  )
}

export default ToDoList;
