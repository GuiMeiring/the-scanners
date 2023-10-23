const Joi=require('joi');
const knl =require('../knl');
const {groupController} = require('../controllers');

knl.post('/group', groupController.createGroup);

knl.get('group', async (resp) => {
  const result =await knl.sequelize().models.Group.findAll({
    where: {
      status: 1,
    },
  });  
  resp.json(result);
});

knl.get('group/:id', async (req, resp) => {
  const result =await knl.sequelize().models.Group.findAll({
    where: {
      id: req.params.id,
    },
  });
  resp.json(result);
});

knl.patch('group/:id', async (req, resp) => {
  console.log(req.params.id);
  const result = await knl.sequelize().models.Group.update({
    status: 0,
  },
  {
    where: {
      id: req.params.id,
    },
  });
  resp.json({'status': 'OK'});
  resp.save(result);
  resp.end();
});

knl.put('group', async (req, resp) => {
  const result = await knl.sequelize().models.Group.update({
    description: req.body.description,
  }, 
  {
    where: {
      id: req.body.id,
    },
  });  
  resp.json({'status': 'OK'});
  resp.save(result);
  resp.end();  
});
