const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 12) {
    res.status(400).json({ messenge: 'Name must be longer than 12 characters' });
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) res.status(400).json({ message: 'Email is not valid' });
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    res.status(400).json({ message: 'Password must be more then 6 characteres' });
  }
  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passwordValidation,
};