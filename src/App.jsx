import React from "react";
import { Routes,Route } from 'react-router-dom';
import Homepage from "./Homepage";
import About from "./About";
import Requests from "./Requests";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Requests" element={<Requests />}/>
      </Routes>
    </>
  )

}

export default App
