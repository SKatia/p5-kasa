import React from 'react';
import { Link } from 'react-router-dom';
import logements from './../../data/logements.json';
import '../../styles/home.css'

const Home = () => {
  return (
    <div className="home">
         <div className='banner'>
           <h1> Chez vous, partout et ailleurs</h1>
         </div>
         <div className="logements-grid">
        {logements.map(logement => (
          <Link to={`/logement/${logement.id}`} key={logement.id} className="logement-card-link">
            <div className="logement-card">
              <img src={logement.cover} alt={logement.title} className="logement-image" />
              <div className="logement-overlay">
                <h2>{logement.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
