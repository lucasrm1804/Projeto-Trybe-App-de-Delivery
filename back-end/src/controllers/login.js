const loginUser = require('../services/login');
const token = require('../middleware/login.JWT');

const OK = 200;
const INTERNAL_ERROR = 500;

const loginController = async (req, res) => {
    try {
        const result = await loginUser(req.body);
        const { email, name, role } = result;
        return res.status(OK).json({
            name,
            email,
            role,
            token: token(email)
        });
    } catch (error) {
        return res.status(INTERNAL_ERROR).json({ message: 'error' });
    }
};

module.exports = loginController;