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