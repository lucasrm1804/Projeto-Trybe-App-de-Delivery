const models = require('../database/models');

const getOrderByUser = async () => {
    try {
      const order = await models.Sale.findAll();
      return order;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  getOrderByUser,

};