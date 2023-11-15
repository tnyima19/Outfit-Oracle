const express = require("express");
const router = express.Router();

const { Users } = require("../models");

router.get("/", async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

module.exports = router;
