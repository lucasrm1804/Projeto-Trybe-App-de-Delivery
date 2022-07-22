const loginUser = require('../services/login');
const { generateToken } = require('../middleware/login.JWT');

const OK = 200;
const ERROR = 404;
const INTERNAL_ERROR = 500;

const loginController = async (req, res) => {
    try {
        const result = await loginUser(req.body);
        const { email, name, role } = result;
        if (result === 0) {
            return res.status(ERROR).json({ message: 'Not found' });
        }
        return res.status(OK).json({
            name,
            email,
            role,
            token: generateToken(email),
        });
    } catch (error) {
        return res.status(INTERNAL_ERROR).json({ message: `${error}` });
    }
};

module.exports = loginController;