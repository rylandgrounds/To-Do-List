import React from "react";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar />
      <ToDoList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
