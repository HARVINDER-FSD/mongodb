const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
await mongoose.connect('mongodb://127.0.0.1:27017/studentdb'); 
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection failed:', error.message);
  }
};

module.exports = connectToDatabase;
