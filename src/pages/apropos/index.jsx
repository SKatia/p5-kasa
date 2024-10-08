import '../../styles/apropos.css'
import Collaps from '../../components/Collaps'

const APropos = () => {
  const collapsData = [
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Service",
      content: "La qualité de service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction soit empreinte de respect."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <div className='apropos'>
      <div className='banner2'>
        {/* <h1> A propos</h1> */}
      </div>
      <div className="apropos">
        {collapsData.map((item, index) => (
          <Collaps key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default APropos