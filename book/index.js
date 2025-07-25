const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book'); 

const app = express();
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};


app.get('/title', (req, res) => {
  res.status(200).json({ message: 'Welcome to Book ' });
});

app.post('/books', async (req, res) => {
  const { title, description, price, stockQuantity, category, authors, coverImage, publishedDate } = req.body;
  try {
    const book = await Book.create({ title, description, price, stockQuantity, category, authors, coverImage, publishedDate });
    res.status(201).json({ message: 'Book created', book });
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find().populate('category').populate('authors');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

app.patch('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book updated', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted', book: deletedBook });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
  connectToDatabase();
});
