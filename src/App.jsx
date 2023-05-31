import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Animatedcursor } from './Components/AnimatedCursor'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Skills } from './pages/Skills/Skills'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'


function App() {
  return (
    <>
    <Animatedcursor/>  
    <Sidebar/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/resume' element={<Skills/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/*' element={<ErrorPage/>}/>
    
   
    </Routes>
    </>
  )
}

export default App
