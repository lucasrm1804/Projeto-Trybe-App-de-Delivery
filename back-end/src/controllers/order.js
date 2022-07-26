const orderService = require('../services/order');

const getOrderByUser = async (req, res) => {
  try {
    // const { id } = req.body;
    const order = await orderService.getOrderByUser();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getOrderByUser,
};