const Joi = require('joi');
const knl = require('../knl');

knl.post('subgroup', async(req,resp) =>{
    const schema =Joi.object({
        description:
            Joi.string().min(1).max(100).required(),
        fkGroup:
            Joi.number().min(1).required(),


    })
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Subgroup.findAll({
        where: {
            description: req.body.description,
            fkGroup: req.body.fkGroup,
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const subgroup = knl.sequelize().models.Subgroup.build({
        description: req.body.description,
        fkGroup: req.body.fkGroup,
        status: 1
    });

    await subgroup.save();
    await resp.json({ "status": "OK" });
    resp.end();


})


knl.get('subgroup', async(req,resp) => {
    let result = await knl.sequelize().models.Subgroup.findAll({
        where: {
            status: 1
        }
    });
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)) {
        for (let subgrupo of result) {
            const group = await knl.sequelize().models.Group.findAll({
                where: {
                    id: subgrupo.fkGroup
                }
            })

            if (!knl.objects.isEmptyArray(group)) {
                subgrupo.group_description = group[0].description
            }

            console.log(subgrupo.group_description)
        }
    }

    resp.json(result);
    resp.end();
})


knl.get('subgroup/:id', async (req, resp) => {
    let result = await knl.sequelize().models.Subgroup.findAll({
        where: {
            id: req.params.id,
            status: 1
        }
    });

    resp.json(result);
    resp.end();
})
knl.get('subgroups', async (req, resp) => {
    let result = await knl.sequelize().models.Subgroup.findAll({
        where: {
            status: 1
        }
    });

    resp.json(result);
    resp.end();
})
knl.put('subgroup', async(req,resp) => {
    const result = await knl.sequelize().models.Subgroup.update({
        description: req.body.description,
    }, {
        where: {
            id: req.body.id
        }
    });

    resp.json({ "status": "OK" });
});

knl.patch("subgroup/:id", async (req, resp) => {
  const result = await knl.sequelize().models.Subgroup.update(
    {
      status: 0,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  resp.json({ status: "OK" });

  resp.end();
});