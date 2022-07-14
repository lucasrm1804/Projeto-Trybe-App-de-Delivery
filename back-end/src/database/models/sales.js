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
  const Sales = sequelize.define('Sales', {
    total_price: DataTypes.NUMBER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false,
  });
  Sales.associate = (models) => {
    Sales.belongToMany(models.users,
      {foreignKey: 'userId', as: 'user'})
  };
  Sales.associate = (models) => {
    Sales.belongToMany(models.Sales,
      {foreignKey: 'sellerId', as: 'user'})
  };
  return Products;
};