const express = require('express');
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controller/book.controller');


const bookrouter = express.Router();

// Create a new book
bookrouter.post('/books', createBook);

// Get all books
bookrouter.get('/books', getAllBooks);

// Get a book by ID
bookrouter.get('/books/:id', getBookById);

// Update a book
bookrouter.patch('/books/:id', updateBook);

// Delete a book
bookrouter.delete('/books/:id', deleteBook);

module.exports = bookrouter;
