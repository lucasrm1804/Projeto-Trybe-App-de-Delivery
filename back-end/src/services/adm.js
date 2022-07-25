const crypto = require('crypto');
const models = require('../database/models');

const getAll = async () => {
  try {
    const users = await models.User.findAll();
    const userAdmFiltered = users.filter((user) => user.role !== 'administrator');
    return userAdmFiltered;
  } catch (error) {
    console.error(error); 
  }
};

const loginAdm = async (email) => {
  const adm = await models.User.findOne({ where: email });
  if (adm.role === 'administrator') {
    return true;
  } return false;
};

const registerUser = async ({ name, email, password, role }) => {
  const getByEmail = await models.User.findOne({ where: { email } });
  if (getByEmail) throw new Error('Email already exists');
  try {
    const passwordCrypto = crypto.createHash('md5').update(password).digest('hex');
    const newUser = await models.User.create({
      name, email, password: passwordCrypto, role,
    });
    return newUser;  
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  getAll,
  loginAdm,
  registerUser,
};
