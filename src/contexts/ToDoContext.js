import React, {createContext, useState} from 'react';


export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
   const [tasks, setTasks] = useState([{task: 'get a job' , id: 1}, 
    {task: 'make the perfect cup of coffee' , id: 2},
    {task: 'dance' , id: 3},
])
    return ( 
        <ToDoContext.Provider value={{tasks}}>
            {props.children}
            </ToDoContext.Provider>
     );
}
 
export default ToDoContextProvider;