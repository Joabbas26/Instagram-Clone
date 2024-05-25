import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy search results
    const dummyResults = [
      { id: 1, username: 'user1', profilePic: 'https://via.placeholder.com/50' },
      { id: 2, username: 'user2', profilePic: 'https://via.placeholder.com/50' },
      // Add more dummy results as needed
    ];
    setResults(dummyResults);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-sm">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-2 rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>
      <div>
        {results.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 mb-4">
            <img src={user.profilePic} alt={user.username} className="w-12 h-12 rounded-full" />
            <span className="font-bold">{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
