const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  stockQuantity: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  authors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }],
  coverImage: String,
  publishedDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema);
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase'); 
    console.log(' MongoDB connected');
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message);
  }
};
module.exports = { Book, connectToDatabase };