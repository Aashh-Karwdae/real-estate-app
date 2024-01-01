import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Header from './Components/Header';

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
