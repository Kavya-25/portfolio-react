
import './App.css'
import { Animatedcursor } from './Components/AnimatedCursor'
import { Navbar } from './Components/Navbar/Navbar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'
import { Skills } from './pages/Skills/Skills'

function App() {
  return (
    <>
    <Animatedcursor/>
    <Sidebar/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    </>
  )
}

export default App
