import { useState, useEffect } from 'react'; //
import '../../styles/home.css'
import data from './../../data/logements.json';


const Home = () => {
  const [logements, setLogements] = useState([]); 

  useEffect(() => {
    setLogements(data); 
  }, []); // useEffect без зависимостей, чтобы данные загружались один раз

  // function Home() {
    return (
      <div>
        <div className='banner'>
          <h1> Chez vous, partout et ailleurs</h1>
        </div>

        {/* return ( */}
        <div className="logements-container">
          {logements.map((logement) => (
            <div key={logement.id} className="logement-card">
              <img src={logement.cover} alt={logement.title} className="logement-image" />
              <h2>{logement.title}</h2>
            </div>
          ))}
        </div>
        {/* ); */}
      </div>
    )
  }

  export default Home