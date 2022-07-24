module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'salesProducts'
  });
  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Products, {
      as: 'Product',
      foreignKey: 'saleId',
      through: SalesProducts,
    });
    models.Products.belongsToMany(models.Sale, {
      as: 'Sale', 
      foreignKey: 'productId',
      through: SalesProducts,
    });
  };
  return SalesProducts;
};