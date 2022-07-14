// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Sales extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Sales.init({
//     total_price: DataTypes.NUMBER,
//     delivery_address: DataTypes.STRING,
//     delivery_number: DataTypes.STRING,
//     sale_date: DataTypes.DATE,
//     status: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Sales',
//   });
//   return Sales;
// };

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
  });
  Sale.associate = (models) => {
    Sale.belongTo(models.User,
      {foreignKey: 'userId', as: 'User'})
  };
  Sale.associate = (models) => {
    Sale.belongTo(models.User,
      {foreignKey: 'sellerId', as: 'User'})
  };
  return Sales;
};