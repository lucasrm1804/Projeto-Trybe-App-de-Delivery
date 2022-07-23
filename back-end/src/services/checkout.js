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

const setSalesProducts = async (saleId, items) => {
  try {
    const arrProduct = items.map((p) => (
      {
        saleId: Number(saleId),
        productId: Number(p.id),
        quantity: p.quantity,
      }
     ));
  //  const newSelesProducts = await Promise.all(arrProduct);
  await Promise.all(arrProduct.map((item) => (
    // console.log(item)
    models.SalesProducts.create(item)
   )));
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
    console.error('test', error); 
  }
};

module.exports = {
  createSela,
  setSalesProducts,
  getSeller,
};
