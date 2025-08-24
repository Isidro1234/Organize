import { useState } from 'react'
import './App.css'
import { Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Authorized from './secure/Authorized'
import Unauthorized from './secure/Unauthorized'
import NotFound from './Pages/NotFound'
import HomeLogged from './Pages/HomeLogged'

function App() {
  return (
   <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Authorized/>}>
        <Route index element={<HomeLogged/>}/>
      </Route>
      <Route path='/Auth/' element={<Unauthorized/>}>
        <Route index  element={<Login/>} />
        <Route path='SignUp' element={<SignUp/>}/>
      </Route>
      <Route path='/*' element={<NotFound/>}/>
   </Routes>
  )
}
export default App
