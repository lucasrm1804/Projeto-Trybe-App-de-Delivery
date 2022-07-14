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
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });
  User.associate = (models) => {
    User.hasMany(models.Sale,
      {foreignKey: 'userId', as: 'Sale'})
  };
  User.associate = (models) => {
    User.hasMany(models.Sale,
      {foreignKey: 'sellerId', as: 'Sale'})
  };
  return User;
};
