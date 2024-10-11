import React from 'react';
import './App.css'; 
import Card from './components/Card.jsx'; 
import cardData from './data.js';

function App() {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index} 
          name={card.name}
          description={card.description}
          color={card.color}
          photo={card.photo}
          website={card.website}
        />
      ))}
    </div>
  );
}

export default App;
