const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: 
    { type: Number, required: true },
  class: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    required: true,
    unique: true,
    },
    address: {
    type: String,
    required: true,
  },    
    phone: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Student', StudentSchema);
