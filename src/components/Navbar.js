import React, {useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";


const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)

  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <ul>
      <a href='https://www.linkedin.com/in/ryland-grounds/'>My LinkedIn </a>
       <br></br> <a href='https://github.com/rylandgrounds'>My Github </a>
        <br></br><a href='https://twitter.com/rgrounds7'>My Twitter</a>
        <br></br><a href='https://rylandgrounds.tk'>My Personal Site</a>
      </ul>
    </nav>
  );
};

export default Navbar;
