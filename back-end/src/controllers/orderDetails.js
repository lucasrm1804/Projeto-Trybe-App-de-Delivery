const selaOrderDetails = require('../services/orderDetails');

const getSellerProduct = async (req, res) => {
  try {
    const { orderId } = req.params;
    const orderDetails = await selaOrderDetails.getSellerProduct(orderId);
    return res.status(200).json(orderDetails);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getSellerProduct,
};
