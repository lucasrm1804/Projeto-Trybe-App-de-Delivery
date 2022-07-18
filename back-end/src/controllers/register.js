const registerService = require('../services/register');

const registerUser = async (req, res, next) => {
  try {
    const newUser = await registerService.registerUser(req.body);
    if (!newUser) return res.status(409).json({ message: 'email already exist' });
    return res.status(201).json({ user: newUser });  
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  registerUser,
};
