const models = require('../database/models');

const getAll = async () => {
  try {
    const products = await models.Products.findAll();
    return products;  
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  getAll,
};