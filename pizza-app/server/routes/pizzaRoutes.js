const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzaController");

router.get("/menu", pizzaController.getAllPizzas);
router.post("/add", pizzaController.createPizza);


module.exports = router;