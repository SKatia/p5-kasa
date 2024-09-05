import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/header.css' 

function Header() {
  return (
    <div class="main-container">
      <header>
        <nav >
          <img className="logo" src={logo} alt="logo" />
          <div className="menu">
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header