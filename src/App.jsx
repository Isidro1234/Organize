import './index.css'
import { Route, Routes } from 'react-router'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Authorized from './secure/Authorized'
import Unauthorized from './secure/Unauthorized'
import NotFound from './Pages/NotFound'
import HomeLogged from './Pages/HomeLogged'
import Add from './Pages/Add'
import Ai from './Pages/Ai'
import Goals from './Pages/Goals'
import Nav from './components/elements/Nav'
import Settings from './Pages/Settings'

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%"}}>
      <Nav/>
      <div style={{flex:1}}>
        <Routes >
        <Route path='/Home' element={<Authorized/>}>
          <Route index element={<HomeLogged/>}/>
        </Route>
        <Route path='/' element={<Unauthorized/>}>
          <Route index element={<Home/>}/>
          <Route path='/Add' element={<Add/>}/>
          <Route path='/Ai' element={<Ai/>}/>
          <Route path='/Goals' element={<Goals/>}/>
          <Route path='/Login'  element={<Login/>} />
          <Route path='/Settings'  element={<Settings/>} />
          <Route  path='/SignUp' element={<SignUp/>}/>
        </Route>
        <Route path='/*' element={<NotFound/>}/>
       </Routes>
      </div>
        
    </div>
   
  )
}
export default App
