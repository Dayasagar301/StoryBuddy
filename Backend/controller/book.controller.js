const { Book } = require("../models/Book");
const { Users } = require("../models/users.models");



// Create a new book
const createBook = async (req, res) => {
  try {
    const { userId, title, description, image, category } = req.body;
    const book = await Book.create({
      userId,
      title,
      description,
      image,
      category
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: [{ model: Users, as: 'user' }] });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ where: { id }, include: [{ model: Users, as: 'user' }] });
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, category } = req.body;
    const updated = await Book.update(
      { title, description, image, category },
      { where: { id } }
    );
    if (updated) {
      const updatedBook = await Book.findOne({ where: { id } });
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
