const models = require('../database/models');

const getOrderByUser = async (id) => {
    try {
      const order = await models.Sale.findAll({
        where: { userId: id },
      });
      return order;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  getOrderByUser,
};