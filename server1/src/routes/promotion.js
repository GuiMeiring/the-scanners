const Joi = require('joi');
const knl = require('../knl');

knl.post('promotion', async (req, resp) => {
  const schema = Joi.object({
    description: Joi.string().min(1).max(100).required(),
    months: Joi.number().required(),
    desconto: Joi.number().min(0).max(100).required(),
    ativo: Joi.boolean().required(),
  });
  knl.validate(req.body, schema);
  const result = await knl.sequelize().models.Promotion.findAll({
    where: {
      description: req.body.description,
    },
  });
  knl.createException('0006', '', !knl.objects.isEmptyArray(result));
  const promotion = knl.sequelize().models.Promotion.build({
    description: req.body.description,
    status: 1,
    months: req.body.months,
    desconto: req.body.desconto,
    ativo: req.body.ativo,
  });
  await promotion.save();
  await resp.json({'status': 'OK'});
  resp.end();
});

knl.get('promotion', async (resp) => {
  const result =await knl.sequelize().models.Promotion.findAll({
    where: {
      status: 1,
    },
  });
  resp.json(result);
  resp.end();
});

knl.get('promotion/:id', async (req, resp) => {
  const result =await knl.sequelize().models.Promotion.findAll({
    where: {
      id: req.params.id,
      status: 1,
    },
  });
  resp.json(result);
  resp.end();
});

knl.put('promotion', async (req, resp) => {
  const result = await knl.sequelize().models.Promotion.update({
    description: req.body.description,
    months: req.body.months,
    ativo: req.body.ativo,
  }, 
  {
    where: {
      id: req.body.id,
    },
  });  
  resp.json({'status': 'OK', result});
});

knl.patch('promotion/:id', async (req, resp) => {
  const result = await knl.sequelize().models.Promotion.update({
    status: 0,
  },
  {
    where: {
      id: req.params.id,
    },
  });
  resp.json({'status': 'OK', result});
  resp.end();
});

knl.delete('promotion/:id', async (req, resp) => {
  const result = await knl.sequelize().models.Promotion.destroy({
    where: {
      id: req.params.id,
    },
  });
  resp.json({'status': 'OK', result});
  resp.end();
});
