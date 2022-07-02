import React from 'react';
import PyqCard from './PyqCard';

const PyqCards = ({ pyqs }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>PYQs</h2>
      {pyqs.map((pyq, index) => {
        return <PyqCard key={index} pyq={pyq} />;
      })}
    </div>
  );
};

export default PyqCards;
