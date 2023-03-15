import Navbar from './Component/Navbar';
import TextArea from './Component/TextArea';
import React, { useState } from 'react';
import Footer from './Component/Footer';
import About from './Component/About';
import Error404 from './Component/Error404';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


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
    <BrowserRouter>
      <Navbar mode={theme} toggleMode={toggleMode}/>

      <Routes>
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/"  element={<TextArea mode={theme}/>} />
        <Route exact path="*"  element={<Error404/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
