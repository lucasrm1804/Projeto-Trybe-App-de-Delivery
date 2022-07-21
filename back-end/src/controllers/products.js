const productService = require('../services/products');

const getProducts = async (_req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(201).json(products);  
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
};