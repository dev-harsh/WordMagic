import Navbar from './Component/Navbar';
import TextArea from './Component/TextArea';
import React, { useState } from 'react';


function App() {
  const [theme,setTheme]=useState("Light");
  
  const toggleMode = () => {
    if(theme==="Light")
    {
      setTheme("Dark");
    }
    else
    {
      setTheme("Light");
    }
  }
  


  return (
    <>
      <Navbar mode={theme} toggleMode={toggleMode}/>
      <TextArea mode={theme}/>
    </>
  );
}

export default App;
