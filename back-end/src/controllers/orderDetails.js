const selaOrderDetails = require('../services/orderDetails');

const getSale = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDetails = await selaOrderDetails.getSale(id);
    return res.status(200).json(orderDetails);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getSale,
};
