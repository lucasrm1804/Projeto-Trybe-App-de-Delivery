const sellerOrderService = require('../services/sellerOrder');

const getOrderByUser = async (req, res) => {
  try {
    // const { id } = req.body;
    const order = await sellerOrderService.getOrderByUser();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getOrderByUser,
};