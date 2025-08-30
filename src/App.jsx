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
import Goals from './Pages/intaOrganizex/Goals'
import Nav from './components/elements/Nav'
import Settings from './Pages/Settings'
import Footer from './components/elements/Footer'
import ProgressBar from './components/elements/ProgressBar'
import ProgressPage from './components/elements/ProgressPage'
import Tools from './Pages/Tools'
import About from './Pages/About'
import Services from './Pages/Services'


function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%"}}>
      <Nav/>
      <div style={{flex:1}}>
        <Routes >
          
        <Route path='/Home' element={<Authorized/>}>
          <Route index element={<HomeLogged/>}/>
          <Route path='/Home/Add' element={<Add/>}/>
          <Route path='/Home/Ai' element={<Ai/>}/>
          <Route path='/Home/Goals' element={<Goals/>}/>
          <Route path='/Home/Settings'  element={<Settings/>} />
        </Route>
        <Route path='/' element={<Unauthorized/>}>
          <Route index element={<Home/>}/>
          <Route path='/Login'  element={<Login/>} />
          <Route  path='/SignUp' element={<SignUp/>}/>
        </Route>
        <Route  path='/Tools' element={<Tools/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route  path='/Service' element={<Services/>}/>
        <Route path='/*' element={<NotFound/>}/>
       </Routes>
      </div>
       <Footer/>
    </div>
   
  )
}
export default App
