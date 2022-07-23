const selaService = require('../services/checkout');

const createSela = async (req, res) => {
  try {
    const { token, order } = req.body;
    const saleId = await selaService.createSela(token, order);
    return res.status(201).json(saleId);  
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getSeller = async (_req, res) => {
  try {
    const sallers = await selaService.getSeller();
    console.log(sallers);
    return res.status(200).json(sallers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
    createSela,
    getSeller,
};
