import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ToDoList extends Component {
    static contextType = ThemeContext;
  render() {
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;

    return (

      <div className="to-do-list" style={{color: theme.syntax, background: theme.bg}}>
        <ul>
          <li style={{background: theme.ui}}> Make the Perfect Cup of Coffee</li>
          <li style={{background: theme.ui}}>Take Over the World</li>
          <li style={{background: theme.ui}}>Watch Criminal Minds</li>
        </ul>
      </div>
    );
  }
}

export default ToDoList;
