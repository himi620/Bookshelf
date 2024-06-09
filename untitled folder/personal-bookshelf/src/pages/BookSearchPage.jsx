// src/pages/BookSearchPage.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BookSearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`)
                .then((response) => response.json())
                .then((data) => setBooks(data.docs))
                .catch((error) => console.error('Error fetching data:', error));
        }
    }, [searchQuery]);

    const addToBookshelf = (book) => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
    };

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <BookList books={books} addToBookshelf={addToBookshelf} />
        </div>
    );
};

export default BookSearchPage;
