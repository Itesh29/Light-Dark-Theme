import React, { createContext, useState } from "react";
import './App.css'
import ReactSwitch from "react-switch";
import Child from "./Child";

export const themeContext = createContext(null);



function App(){

  const [theme,setTheme] = useState('Dark')

  const toggleTheme = () => {
    setTheme((theme)=>(theme==='Light'?'Dark' : 'Light'))
  }

  return(
    <themeContext.Provider value={theme}>
      <div className="App" id={theme}>
      <Child/>
      <ReactSwitch onChange={toggleTheme} checked={theme==='Dark'} checkedIcon={false} uncheckedIcon={false}/>
    </div>
    </themeContext.Provider>
  )
}


export default App

