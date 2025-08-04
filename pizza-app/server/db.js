const mongoose = require("mongoose")

async function connectToDb ()
{
   try
   {
    await mongoose.connect("mongodb://127.0.0.1:27017/pizzaDB")
    console.log("Database Connected")
   }
   catch
   {
    console.log("database not connected")
   }
}

module.exports = connectToDb