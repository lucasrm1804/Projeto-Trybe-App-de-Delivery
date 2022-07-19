const registerService = require('../services/register');

const registerUser = async (req, res, _next) => {
  try {
    const newUser = await registerService.registerUser(req.body);
    return res.status(201).json(newUser);  
  } catch (error) {
    return res.status(409).json({ message: 'Email already exists' });
    // next(error);
  }
};

module.exports = {
  registerUser,
};
