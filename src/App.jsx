import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Animatedcursor } from './Components/AnimatedCursor'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Skills } from './pages/Skills/Skills'


function App() {
  return (
    <>
    <Animatedcursor/>  
    <Sidebar/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    
   
    </Routes>
    </>
  )
}

export default App
