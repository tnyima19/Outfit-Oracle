"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Product extends Model {}

  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size_clothing: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pattern: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    styles: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'users', // Referencing the users table
        key: 'email'
      }
    }
  }, {
    sequelize,
    modelName: "Product", // 
    tableName: 'products', 
    timestamps: false //  don't have created_at and updated_at columns
  });

  return Product;
};
