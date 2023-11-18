const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const { Explore } = require("../models");
const { Selling } = require("../models");

router.get("/", async (req, res) => {
  try {
    // const newProduct = await Product.create({ title: "Test Product" /* other fields */ });
    const products = await Product.findAll();
    console.log("products are: " + JSON.stringify(products));
    res.json(products);
  } catch (error) {
    console.error("Error in /products route", error);
    res.status(500).send("Error testing Products model");
  }
});

router.get("/explore", async (req, res) => {
  try {
    const products = await Explore.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send("error testing explore model");
  }
});

router.get("/selling", async (req, res) => {
  try {
    const products = await Selling.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send("error testing selling model");
  }
});

module.exports = router;
