import React, { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Implement your search functionality here
        // You can use the searchQuery state to access the user's input
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your search query"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;