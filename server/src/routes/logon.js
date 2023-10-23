const knl = require('../knl');
require('dotenv').config();
const Joi = require('joi');
const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');
const {logonController}  = require('../controllers')

knl.post('logon', logonController.logon, process.env.USER_TYPE_PUBLIC);
