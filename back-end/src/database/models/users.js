// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   users.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'users',
//   });
//   return users;
// };

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  users.associate = (models) => {
    users.hasMany(models.Sales,
      {foreignKey: 'userId', as: 'Sale'})
  };
  users.associate = (models) => {
    users.hasMany(models.Sales,
      {foreignKey: 'sellerId', as: 'Sale'})
  };
  return Products;
};
