const Joi = require('joi');
const md5 = require('../utils/md5-pass');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('user', async(req, resp) => {
    const schema = Joi.object({
        name : Joi.string().min(1).max(100).required(),
        username : Joi.string().min(1).max(100).required(),
        password : Joi.string().min(6).max(16).required(),
        cpassword : Joi.string().min(6).max(16).required(),
        roles : Joi.number().min(1).max(11).required()
    })
    console.log(req.body);

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Usuario.findAll({
        where : {
            username : req.body.username
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));
    knl.createException('0007', '', req.body.password != req.body.cpassword);

    const user = knl.sequelize().models.Usuario.build({
        name     : req.body.name,
        username : req.body.username,
        password : md5(req.body.password),
        roles    : req.body.roles,
        status   : 1
    });

    await user.save();
    await resp.json({"status":"ok"});
    resp.end();
});
knl.get('user', async (req, resp)=>{
    const result =await knl.sequelize().models.Usuario.findAll({
        where: {
            status:1
        }
    });
    resp.json(result);
    resp.end();
})
knl.patch('user/:id', async(req, resp)=>{
    knl.createException('0007', '', req.body.password != req.body.cpassword);
    const result = await knl.sequelize().models.Usuario.update({
        password : md5(req.body.password),
    },
    {
    where:{
        id:req.params.id
        }
    });
    resp.json({"status":"ok"});
    resp.end();
})
knl.patch('user', async(req, resp)=>{
    const result = await knl.sequelize().models.Usuario.update({
        status:0,
    },
    {
    where:{
        id:req.body.id
        }
    });
    resp.json({"status":"ok"});
    resp.end();
})
