const crypto = require('crypto');
const models = require('../database/models');

const registerUser = async ({ name, email, password }) => {
  try {
    const getByEmail = await models.User.findOne({ where: { email } });
    if (getByEmail) return null;
    const passwordCrypto = crypto.createHash('md5').update(password).digest('hex');
    const newUser = await models.User.create({
      name, email, password: passwordCrypto, role: 'customer',
    });
    return newUser;  
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  registerUser,
};
