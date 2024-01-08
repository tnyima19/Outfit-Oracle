const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const productControllerInit = require("./productController");
const userController = require("./userController");
// Load each controller
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[0];
  console.log("user wants to come but token is " + authHeader);

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
// router.use("/micro_posts", microPostsController);
router.use("/products", productControllerInit);
router.use("/users", userController);
module.exports = router;
