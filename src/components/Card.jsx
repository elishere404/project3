import React from 'react';
import '../App.css'; 

const Card = ({ name, description, color, photo, website }) => {
  const openWebsite = () => {
    window.open(website, '_blank');
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={photo} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      {/* Button to trigger the website opening */}
      <button onClick={openWebsite} className="button-81">
        Visit Website
      </button>
    </div>
  );
};

export default Card;
