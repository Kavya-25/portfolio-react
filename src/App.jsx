import './App.css'
import {Routes, Route,useLocation} from 'react-router-dom'
import { Animatedcursor } from './Components/AnimatedCursor'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Skills } from './pages/Skills/Skills'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { AnimatePresence } from 'framer-motion'
import { Contact } from './pages/Contact/Contact'
import {ToastContainer} from 'react-toastify';



function App() {
  const location=useLocation();
  return (
    <>
    <Animatedcursor/>  
    <Sidebar/>
    <Navbar/>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/resume' element={<Skills/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
    </AnimatePresence>
   
    </>
  )
}

export default App
