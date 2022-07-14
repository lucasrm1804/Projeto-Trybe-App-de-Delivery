// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    urlImage: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
  });
  // Products.associate = (models) => {
  //   Products.belongToMany(models.SalesProducts,
  //     {foreignKey: 'productId', as: 'SalesProduct'})
  // };
  return Products;
};