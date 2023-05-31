import './Navbar.scss'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
  <h2>//</h2>
  <ul>
    <li><Link to='/'>_home</Link></li>
    <li><Link to='/about'>_about</Link></li>
    <li><Link to='/skills'>_skills</Link></li>
    <li><Link to='/portfolio'>_portfolio</Link></li>
    <li><Link to='/contact'>_contact</Link></li>
   
  </ul>
</nav>
  )
}
