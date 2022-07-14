// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class SalesProducts extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   SalesProducts.init({
//     quantity: DataTypes.NUMBER
//   }, {
//     sequelize,
//     modelName: 'SalesProducts',
//   });
//   return SalesProducts;
// };

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: DataTypes.NUMBER
  },
  {
    timestamps: false,
  });
  SalesProducts.associate = (models) => {
    SalesProducts.hasMany(models.Products,
      {foreignKey: 'productId', as: 'Product'})
  };
  return Products;
};