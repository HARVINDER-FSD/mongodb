const express = require('express');
const { connectToDatabase, User } = require('./db');
const app = express();
app.use(express.json());


app.get('/form', (req, res) => {
  res.status(200).json({message: 'Welcome to the home page'})
});



app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully', user: result });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});


// app.get('/users', async (req, res) => {
//     try {   
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({message: 'Error fetching users', error}); 
//     }
// });



app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectToDatabase();
});