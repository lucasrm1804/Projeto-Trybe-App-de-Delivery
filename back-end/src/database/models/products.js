// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200),
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