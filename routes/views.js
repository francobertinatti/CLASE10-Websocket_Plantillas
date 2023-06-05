const express = require("express");
const router = express.Router();
const { generateProducts } = require("../utils");

router.get("/home", (req, res) => {
  const products = generateProducts(10);
  res.render("home", { products });
});

router.get("/realtimeproducts", (req, res) => {
  const products = generateProducts(10);
  res.render("realTimeProducts", { products });
});

module.exports = router;
