import logofooter from '../../assets/logo-blanc.png'
import '../../styles/footer.css' 

function Footer() {
  return (
      <footer>
        <div >
          <div>
          <img className="logo" src={logofooter} alt="logo" />
          </div>
          <div>
          <p>
          © 2020 Kasa. All rights reserved
          </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer