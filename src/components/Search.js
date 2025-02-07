import React, { useState, useEffect } from 'react';
import './styles/Search.css';

function Search({ onSearch, resultCount }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.querySelector('.search-input').focus();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search characters..." 
        value={query}
        onChange={handleInputChange}
      />
      {resultCount !== null && resultCount > 0 && (
        <div className="search-results">Found: {resultCount} characters</div>
      )}
    </div>
  );
}

export default Search;
