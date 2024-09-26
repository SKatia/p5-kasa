import logo from '../../assets/logo.png'
import '../../styles/header.css' 
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="main-container">
      <header>
        <nav >
          <img className="logo" src={logo} alt="logo" />
          <div className="menu">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">A propos</NavLink>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header