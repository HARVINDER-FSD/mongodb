const Pizza = require("../model/pizzaModel");


// get pizzas

exports.getAllPizzas = async (req, res) => {
  const pizzas = await Pizza.find();
  res.json(pizzas);
};


// add
exports.createPizza = async (req, res) => {
  const { name, price, size } = req.body;
  const pizza = new Pizza({ name, price, size });
  await pizza.save();
  res.status(201).json({ message: "Pizza Added!" });
};