import React from "react";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ToDoList from "./components/ToDoList";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToDoContextProvider from "./contexts/ToDoContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <ToDoContextProvider>
            <ToDoList />
          </ToDoContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
