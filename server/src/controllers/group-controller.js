const Joi = require('joi');
const knl = require('../knl');

const groupController = {

  createGroup: async (req, resp) => {
    const schema = Joi.object({
      description: Joi.string().min(1).max(100).required(),
    });
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Group.findAll({
      where: {
        description: req.body.description,
      },
    });
    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const group = knl.sequelize().models.Group.build({
      description: req.body.description,
      status: 1,
    });

    try {
      await group.save();
      resp.json({'status': 'OK'});
    } catch (_) {
      resp.status(500).json({error: 'Internal Server Error'});
    }
  },

  getGroups: async (req, resp) =>{
    const result =await knl.sequelize().models.Group.findAll({
      where: {
        status: 1,
      },
    });
    resp.json(result);
  },

  getById: async (req, resp) =>{
    const result =await knl.sequelize().models.Group.findAll({
      where: {
        id: req.params.id,
      },
    });

    resp.json(result);
  },

  patchById: async (req, resp) => {
    

    try {
      const result= await knl.sequelize().models.Group.update({
        status: 0,
      },
      {
        where: {
          id: req.params.id,
        },
      });

      resp.json({'status': 'OK'});
    } catch (error) {
      resp.status(500).json({error: 'Internal Server Error'});
    }
  },

  updateGroup: async (req, resp) => {
   
    try {
      const result=  await knl.sequelize().models.Group.update({
        description: req.body.description,
      },
      {
        where: {
          id: req.body.id,
        },
      });

      resp.json({'status': 'OK'});
    } catch (error) {
      console.log(error);
      resp.status(500).json({error: 'Internal Server Error'});
    }
  },

};

module.exports = groupController;
