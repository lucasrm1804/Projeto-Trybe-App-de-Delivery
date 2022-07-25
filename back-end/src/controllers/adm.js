const admService = require('../services/adm');

const getAll = async (_req, res) => {
  try {
    const userFilteredAdm = await admService.getAll();
    // console.log(userFilteredAdm);
    return res.status(200).json(userFilteredAdm);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAdm = async (_req, res) => {
  try {
    const adm = await admService.loginAdm();
    if (adm) return true;   
  } catch (error) {
    return res.status(400).json({ message: error.message });    
  }
};

const registerUser = async (req, res, _next) => {
  try {
    const newUser = await admService.registerUser(req.body);
    return res.status(201).json(newUser);  
  } catch (error) {
    return res.status(409).json({ message: 'Email already exists' });
  }
};

module.exports = {
  getAll,
  getAdm,
  registerUser,
};
