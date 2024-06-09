// src/pages/BookshelfPage.js
import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBookshelf);
    }, []);

    return (
        <div>
            <h1>My Bookshelf</h1>
            <BookList books={bookshelf} addToBookshelf={() => {}} />
        </div>
    );
};

export default BookshelfPage;
