import React, { useState } from 'react';
import '../../styles/apropos.css'

const Collaps = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollaps = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collaps">
      <div className="collaps-header" onClick={toggleCollaps}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </div>
      {isOpen && (
        <div className="collaps-content">
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
      )}
    </div>
  );
};

export default Collaps;