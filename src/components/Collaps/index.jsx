import React, { useState, useRef } from 'react';

import '../../styles/apropos.css'

const Collaps = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollaps = () => {
    const contentElement = contentRef.current;

    if (isOpen) {
      // hauteur courant
      contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;

      // apés delay commence fermeture
      setTimeout(() => {
        contentElement.style.maxHeight = '0px';
        contentElement.style.padding = '0'; 
      }, 10);
    } else {
      // pour ouverture
      contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
      contentElement.style.padding = '20px'; 

      setTimeout(() => {
        contentElement.style.maxHeight = 'none'; 
      }, 500); // = transition
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="collaps">
      <div className="collaps-header" onClick={toggleCollaps}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </div>
      <div ref={contentRef} className={`collaps-content`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collaps;
