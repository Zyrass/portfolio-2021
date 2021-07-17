// Dépendances
import { NavLink, Link } from 'react-router-dom'

// SCSS
import "./Navbar.scss"

const Navbar = () => {
  return(
    <nav>
      <span>&lt; Alain Guillon /&gt;</span>
      <ul>
        <li><NavLink to="/accueil" activeClassName="active">Accueil</NavLink></li>
        <li><NavLink to="/story">Story</NavLink></li>
        <li><Link id="#project">Projects</Link></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar