const models = require('../database/models')

const registerUser = async ({ name, email, password, role }) => {
  try {
    const newUser = await models.User.create({ name, email, password, role });
    return newUser;  
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  registerUser,
};
