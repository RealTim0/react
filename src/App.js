import React from 'react'
import Board from './Board'
import Navbar from "./Navbar"
import Home from './Home'
import Login from "./Login"

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'




 const App = () => {
  return(
   
    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}
      <Route exact path='/' element={<Home />}/>
      <Route path='/Login' element={<Login />} />
      <Route path='/Board' element={<Board />} />
    </Routes>
  </BrowserRouter>
      
    
   
  )
}
export default App

