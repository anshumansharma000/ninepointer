import React from 'react';
import PyqCard from './PyqCard';

const PyqCards = ({ pyqs }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>PYQs</h2>
      {pyqs.map((pyq, index) => {
        return (
          <div key={index}>
            <PyqCard pyq={pyq} />
          </div>
        );
      })}
    </div>
  );
};

export default PyqCards;
