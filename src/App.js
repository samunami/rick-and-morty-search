import React, { useState } from 'react';
import Search from './components/Search';
import CharacterCard from './components/CharacterCard';
import './styles/App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false); 

  const handleSearch = async (query) => {
    if (query.length > 2) {
      setLoading(true);
      setError('');
      setSearched(true); 

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();

        if (data.results) {
          setCharacters(data.results);
        } else {
          setCharacters([]);
          setError('No characters found.');
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    } else {
      setCharacters([]);
      setError('');
      setSearched(false);
    }
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} resultCount={searched ? characters.length : null} />
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
