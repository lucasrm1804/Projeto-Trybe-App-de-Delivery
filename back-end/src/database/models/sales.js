module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sale', {
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
  Sales.associate = (models) => {
    Sales.belongsTo(models.User,
      {foreignKey: 'userId', as: 'User'})
  };
  Sales.associate = (models) => {
    Sales.belongsTo(models.User,
      {foreignKey: 'sellerId', as: 'User'})
  };
  return Sales;
};