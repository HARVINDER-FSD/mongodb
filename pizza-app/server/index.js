const express = require('express');
const connectToDb = require('./db');
const cors = require('cors'); 
const pizzaRoutes = require('./routes/pizzaRoutes'); 

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(pizzaRoutes);

app.listen(9000, async () => {
  try {
    await connectToDb();
    console.log("Server running....");
  } catch {
    console.log("Server failed to start...");
  }
});