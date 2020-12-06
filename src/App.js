import React from "react";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ToDoList from "./components/ToDoList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToDoContextProvider from "./contexts/ToDoContext";

function App() {
  return (
    <div className="App">
     
        <ThemeContextProvider>
          <Navbar />
          <ToDoContextProvider>
            <ToDoList />
          </ToDoContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
    </div>
  );
}

export default App;
