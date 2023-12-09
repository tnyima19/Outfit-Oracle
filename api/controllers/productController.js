const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const { Explore } = require("../models");
const { Selling } = require("../models");
const { Cart } = require("../models");
const { Sold } = require("../models");
const  authenticateToken = require("./authenticateToken");
const {Op} = require('sequelize');

async function findProductsByStyles(stylesArray) {
  try {
      const products = await Product.findAll({
          where: {
              styles: {
                  [Op.overlap]: stylesArray
              }
          }
      });

      return products;
  } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
  }
}


router.get("/", async (req, res) => {
  try {
    const styles = req.body.styles;

    // If styles are provided, find products by styles
    if (styles != null) {
      try {
        const productsByStyles = await findProductsByStyles(styles);
        console.log("Filtered products are: " + JSON.stringify(productsByStyles));
        return res.status(200).json(productsByStyles);
      } catch (error) {
        console.error('Error:', error);
        return res.status(500).send("Error fetching products by styles");
      }
    }

    // If no styles are provided, find all products
    const products = await Product.findAll();
    console.log("All products are: " + JSON.stringify(products));
    return res.json(products);
  } catch (error) {
    console.error("Error in /products route", error);
    return res.status(500).send("Error testing Products model");
  }
});


router.get("/filter", async (req, res) => {
  try {
      // Extracting query parameters
      const { size, styles, gender, color, material, size_clothing, pattern } = req.body;

      // Building the query conditionally
      let queryConditions = {};
      
      if (size) {
          queryConditions.size = size;
      }
      if (styles) {
          queryConditions.styles = { [Op.contains]: [styles] };
      }
      if (gender) {
          queryConditions.gender = gender;
      }
      if (color) {
          queryConditions.color = color;
      }
      if (material) {
          queryConditions.material = material;
      }
      if (size_clothing) {
          queryConditions.size_clothing = size_clothing;
      }
      if (pattern) {
          queryConditions.pattern = pattern;
      }

      // Fetching the products
      const products = await Product.findAll({
          where: queryConditions
      });

      // Returning the products
      return res.status(200).json(products);
  } catch (error) {
      console.error("Error in /filter route", error);
      return res.status(500).send("Error fetching filtered products");
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



const getCart = async (req, res) => {
  try {
    let email = req.user.email;
    const products = await Cart.findAll({where:{email:email}});
    res.json(products);
  } catch (error) {
    res.status(500).send("error testing cart model");
  }
}


const addToCart = async (req, res) => {
  try{
    let email = req.user.email;
    let product_id = req.body.product_id;
    let quantity = req.body.quantity;
    const product = await Selling.findOne({where:{product_id:product_id}});
    if(product == null) {
      // product does not exist
      return res.status(500).send("product does not exist");
    }
    console.log("product has this quantity: " + product.quantity);
    // check if product exists in database at that quantity
    if(quantity>product.quantity)
    {
      return res.status(500).send("Not enough of product in stock");
    }
    // if user already has the product, update their quantity, otherwise add the product to their cart
    const userHasProduct = await Cart.findOne({where:{product_id:product_id, email: email}});
    if(userHasProduct == null) {
      await Cart.create({email:email, product_id:product_id, quantity: quantity});
      // return res.status(200).send("successfully added " + quantity + " amount of product_id " + product_id);

    } else  {
      currQuantity = userHasProduct.quantity;
      if(currQuantity + quantity > product.quantity)
      {
        return res.status(500).send("Can't add to cart because if added, your cart will have the product in a quantity that exceeds the stocked amount");
      }
      await Cart.update({quantity: currQuantity+quantity}, {
        where: {
          email: email,
          product_id: product_id
        }
      })
    }

    console.log("product id is " + product_id);
    res.status(200).send("successfully added " + quantity + " amount of product_id " + product_id);
  } catch (error) {
    res.status(500).send("error testing add to cart");
  }
}


const deleteFromCart = async (req, res) => {
  try{
    let email = req.user.email;
    let product_id = req.body.product_id;
    let quantity = req.body.quantity;
    if(quantity <= 0){
      return res.status(401).send("Can't delete negative or 0 quantity");
    }
    const product = await Cart.findOne({where:{product_id:product_id, email:email}});
    if(product == null) {
      // product does not exist
      return res.status(500).send("product does not exist in cart");
    }
    console.log("product has this quantity: " + product.quantity);
    // check if product exists in database at that quantity
    if(quantity>product.quantity)
    {
      return res.status(500).send("Don't have " + quantity + " amount in the cart");
    }
    else{
      if(product.quantity - quantity == 0) {
        await Cart.destroy({
          where: {
            email: email,
            product_id: product_id
          }
        });
      } else  {
        await Cart.update({quantity: product.quantity-quantity}, {
          where: {
            email: email,
            product_id: product_id
          }
        }); 
      }
      return res.status(500).send("successfully deleted " + quantity + " amount from the cart");
    }

  } catch (error) {
    return res.status(500).send("error testing add to cart");
  }
}

router.get("/cart", authenticateToken, getCart);

router.get("/sold", async (req, res) => {
  try {
    const products = await Sold.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send("error testing sold model");
  }
});

router.post("/addToCart", authenticateToken, addToCart);
router.post("/deleteFromCart", authenticateToken, deleteFromCart);

module.exports = router;
