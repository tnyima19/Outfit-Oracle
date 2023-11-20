const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const { Users } = require("../models");

const loginUser = async (req, res) => {
  let email = req.body.email;
  let password = "";
  console.log("email is " + email);
  // const userExists = await pool.query(queries.checkUserExists, [email]);
  // if (userExists.rowCount == 0) {
  //   console.log("This user does not exist");
  //   return res.send("this user does not exist");
  // } else {
  //   password = userExists.rows[0].password;
  // }

  console.log("password is " + password);
  console.log("req body password: " + req.body.password);

  if (await bcrypt.compare(req.body.password, password)) {
    console.log("bcrypt says this is a good password");

    const user = { email: email };
    const accessToken = generateAccessToken(user);
    return res.json({ accessToken: accessToken });

    // return res.send("success");
  } else {
    console.log("bcrypt says this is NOT a good password");

    return res.send("not allowed");
  }
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

const createAccount = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // const userExists = await pool.query(queries.checkUserExists, [email]);
  // if (userExists.rowCount > 0) {
  //   console.log("email exists");
  //   res.status(404).send("email exists");
  // } else {
  //   const salt = await bcrypt.genSalt();
  //   const hashedPassword = await bcrypt.hash(req.body.password, 10);
  //   await pool.query(queries.addUser, [`${email}`, `${hashedPassword}`]);
  //   console.log("encrypted password and added to db");
  //   res.status(201).send("encrypted password and added to db");
  // }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log("hashed password " + hashedPassword);
  console.log("encrypted password and added to db");
  res.status(201).send("encrypted password and added to db");
};

router.get("/", async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

router.post("/createAccount", createAccount);

module.exports = router;
