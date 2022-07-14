// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  Products.associate = (models) => {
    Products.belongToMany(models.SalesProducts,
      {foreignKey: 'productId', as: 'SalesProduct'})
  };
  return Products;
};