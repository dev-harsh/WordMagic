import Navbar from './Component/Navbar';
import TextArea from './Component/TextArea';
import React, { useState } from 'react';
import Footer from './Component/Footer';


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
      <Footer/>
    </>
  );
}

export default App;
