import React from 'react';
import Card from './Card';

const InfoCards = ({personData, deletePersonData}) => {
  return (
    <div className="card-container">
      {personData.map((element) => {
        return (
          <Card data={element} deletePersonData={deletePersonData} />
        );
      })}
    </div>
  );
};

export default InfoCards;
