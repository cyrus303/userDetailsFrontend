import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({data, deletePersonData}) => {
  const {name, description, linkedin, twitter, interests} = data;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="interests">
        <h3>Interests</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <div className="social-media">
        {linkedin && (
          <button
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </button>
        )}
        {twitter && (
          <button
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </button>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-x close-btn"
        viewBox="0 0 16 16"
        onClick={() => {
          deletePersonData(data);
        }}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{' '}
      </svg>
    </div>
  );
};

export default Card;
