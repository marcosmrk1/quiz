import React from 'react'
import Background from "../background/dist/Background";
import { Route,Routes } from "react-router-dom";
import BackgroundAquatico from '../background/dist/BackGroundAquatico'


const RoutesGlobais = () => {

      return (
        <Routes>
            <Route path="/" element = {<Background/>}/>
            <Route path='/inicio' element = {<BackgroundAquatico/>} />
        </Routes>
      )
    }

export default RoutesGlobais