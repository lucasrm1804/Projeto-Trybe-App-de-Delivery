const md5 = require('md5');
const models = require('../database/models');

const loginUser = async ({ email, password }) => {
    const passwordUser = md5(password);
    const login = await models.User.findOne({ where: { email, password: passwordUser } });
    if (!login) return null;
    return login;
};

module.exports = loginUser;