const express = require("express");
const router = express.Router();

// Load each controller
const microPostsController = require("./microPosts.js");
const productControllerInit = require("./productController.js");
const userController = require("./userController.js");
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/micro_posts", microPostsController);
router.use("/products", productControllerInit);
router.use("/users", userController);
module.exports = router;
