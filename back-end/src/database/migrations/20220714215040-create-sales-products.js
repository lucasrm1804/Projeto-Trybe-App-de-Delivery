'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'Sales', key: 'id' },
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  }
};