const models = require('../database/models');

async function loginUser(email, password) {
    const user = await models.User.findOne({ where: { email, password } });
    return user;
}

module.exports = { loginUser };