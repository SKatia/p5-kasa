import '../../styles/erreur.css'
import { Link } from 'react-router-dom';


function Error() {
    return (
        <div className='page404'>
            <div className="text404">404</div>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner à la page d'accueil</Link>
            </div>
    )
}
 
export default Error