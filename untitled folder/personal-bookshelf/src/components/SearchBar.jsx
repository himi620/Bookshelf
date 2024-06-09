
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchBar;
