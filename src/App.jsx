import React from "react";
import { Routes,Route } from 'react-router-dom';
import Homepage from "./Homepage";
import About from "./About"

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>
  )

}

export default App
