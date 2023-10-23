const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');
const Joi = require('joi');
const knl = require('../knl');

const logonController = {
  logon: async (req, resp) => {
    try {
      const schema = Joi.object({
        username: Joi.string().max(50).min(1).required(),
        password: Joi.string().max(20).min(6).required(),
    });
    
     knl.validate(req.body, schema);

  const result = await knl.sequelize().models.Usuario.findAll({
    where: {
      username: req.body.username,
      password: md5(req.body.password),
      status: 1,
    },
  });

  knl.createException('0005', '', knl.objects.isEmptyArray(result));
  const user = knl.objects.copy(result[0]);
  delete user.password;
  delete user.createdAt;
  delete user.updatedAt;

  resp.json({
    token: jwt.sign(user.id),
    user: user,
  });
    } catch (error) {
      // Lida com erros apropriados, como enviar uma resposta de erro
      resp.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = logonController;
