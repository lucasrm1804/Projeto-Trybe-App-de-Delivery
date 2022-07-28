const models = require('../database/models');

const getSale = async (orderId) => {
    try {
      const order = await models.Sale.findOne({
        where: { id: orderId },
        include: [{ model: models.Products, as: 'Product' }],
      });
      return order;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  getSale,
};
