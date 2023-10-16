const md5 = require('md5');
require('dotenv').config();


module.exports = (password) => {
    return md5(process.env.PASSWORD_SALT + password + process.env.PASSWORD_SALT);
}