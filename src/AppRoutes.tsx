import React from "react";
import {Route, Routes} from "react-router-dom"
import Homepage from "./components/Homepage/Homepage";
import Samplepage from "./components/Samplepage/Samplepage";

const AppRoutes = () =>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/sample' element={<Samplepage/>}/>
  </Routes>


export default AppRoutes
