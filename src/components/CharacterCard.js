import React from 'react';
import './styles/CharacterCard.css';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <div className="character-content">
        <h2>{character.name} - {character.species}</h2>
        <div className="character-footer">
          <p className={`status ${character.status.toLowerCase()}`}>
            Status: <span>{character.status}</span>
          </p>
          <p className="created">Created: {new Date(character.created).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
