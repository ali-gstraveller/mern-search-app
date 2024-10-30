// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div>
      <h1>Search App</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search items..." 
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {results.map((item) => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
