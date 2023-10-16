const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.sign = (userid) => {
    return jwt.sign({userid : userid}, process.env.JWT_KEY, {expiresIn : 43200});
}

module.exports.verify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err){
                reject(err);
                return;
            }

            resolve(decode);
        })
    })
}