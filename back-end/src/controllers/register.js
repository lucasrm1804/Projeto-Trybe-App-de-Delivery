const registerService = require('../services/register');

const registerUser = async (req, res) => {
  try {
    const newUser = await registerService.registerUser(req.body);
    return res.status(201).json({ user: newUser });  
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  registerUser,
};
