const selaService = require('../services/checkout');

const createSela = async (req, res) => {
  try {
    const { order } = req.body;
    const { authorization } = req.headers;
    const saleId = await selaService.createSela(authorization, order);
    return res.status(201).json(saleId);  
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getSeller = async (_req, res) => {
  try {
    const sallers = await selaService.getSeller();
    return res.status(200).json(sallers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
    createSela,
    getSeller,
};
