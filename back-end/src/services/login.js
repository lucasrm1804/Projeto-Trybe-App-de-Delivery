const md5 = require('md5');
const models = require('../database/models');

const loginUser = async ({ email, password }) => {
    const passwordUser = md5(password);
    const loginUser = await models.User.findOne({ where: { email, password: passwordUser } });
    if (!loginUser) return null;
    return loginUser;
};

module.exports = loginUser;