const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const { Users } = require("../models");

const loginUser = async (req, res) => {
  let email = req.body.email;
  console.log("email is " + email);
  const userExists = await Users.findOne({where: {email:email}});
  if (userExists == null) {
    console.log("This user does not exist");
    return res.send("this user does not exist");
  } else {
    password = userExists.password;
  }

  console.log("password is " + password);
  console.log("req body password: " + req.body.password);

  if (await bcrypt.compare(req.body.password, password)) {
    console.log("bcrypt says this is a good password");

    const user = { email: email };
    const accessToken = generateAccessToken(user);
    return res.status(200).json({ accessToken: accessToken });

    // return res.send("success");
  } else {
    console.log("bcrypt says this is NOT a good password");

    return res.status(401).send("wrong password");
  }
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

const createAccount = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let userStyle = req.body.styles;
  console.log("user style is " + userStyle);
  // const userExists = await pool.query(queries.checkUserExists, [email]);
  const userExists = await Users.findOne({where: {email:email}});
  console.log("user exists returning:  " + userExists);
  if (userExists != null) {
    console.log("email exists");
    return res.status(404).send("email exists");
  } else {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // await pool.query(queries.addUser, [`${email}`, `${hashedPassword}`]);
    Users.create({email:email, password:hashedPassword,styles:userStyle})
    console.log("encrypted password and added to db");
    return res.status(201).send("encrypted password and added to db");
  }


};

router.get("/", async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

router.post("/createAccount", createAccount);
router.post("/loginUser", loginUser);

module.exports = router;
