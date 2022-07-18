const loginService = require('../services/login');

// const BAD_REQUEST = 400;
const OK = 200;

async function loginController(req, res) {
    const { email, password } = req.body;
try {
    const result = await loginService.loginUser(email, password);
    return res.status(OK).json({ result });
    } catch (error) {
    console.error(error);
    next(error);
    }
}

module.exports = { loginController };