const models = require('../database/models');

const getSellerProduct = async (orderId) => {
    try {
      const order = await models.SalesProducts.findAll({
        where: { selaId: orderId },
        include: [{ model: models.Sale, as: 'saleId' }],
      });
      return order;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  getSellerProduct,
};
