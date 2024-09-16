//import '  ../styles/logementCard.scss';
import '../../styles/logementCard.css';

// function LogementDetails() {
//     return (
//       <div>
//         <h1> Cozy loft</h1>
//       </div>
//     )
//   }
  
//   export default LogementDetails

//import React from 'react';
import { useParams } from 'react-router-dom';
import data from './../../data/logements.json';
import Slideshow from '../../components/SlideSHow';
import Collaps from '../../components/Collaps';

const LogementDetails = () => {
  const { id } = useParams();  // Получаем ID объекта из URL

  // Найдем объект по его ID
  const logement = data.find(logement => logement.id === id);

  if (!logement) {
    return <p>Logement not found</p>;
  }

  return (
    <div className="logement-details">
      <Slideshow pictures={logement.pictures} />
      {/* <img src={logement.cover} alt={logement.title} /> */}
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Вы также можете добавить другие данные, такие как оборудование, рейтинг и т.д. */}
    </div>
  );
};


export default LogementDetails;