const models = require('../database/models');
const { verifyToken } = require('../middleware/login.JWT');

const createSela = async (token, order) => {
  try {
    if (verifyToken(token)) {
      const sale = await models.Sale.create(order);
      return sale.id;  
    }
    throw new Error('invalid token');
  } catch (error) {
    console.error(error);    
  }
};

const getSeller = async () => {
  try {
    const users = await models.User.findAll();
    const sellers = users.filter((u) => u.role === 'seller');
    return sellers;
  } catch (error) {
    console.error(error); 
  }
};

module.exports = {
  createSela,
  getSeller,
};
