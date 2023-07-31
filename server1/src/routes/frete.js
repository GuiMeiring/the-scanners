const Joi = require('joi');
const knl = require('../knl');

knl.post('frete', async (req, resp) => {
    const schema = Joi.object({
        fkProduct: Joi.number().min(1).required(),
        total: Joi.number().min(1).required(),
        desc: Joi.number().min(1).required()
    })
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Frete.findAll({
        where: {
            fkProduct: req.body.fkProduct,
            total: req.body.total,
            desc: req.body.desc,
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const products = knl.sequelize().models.Frete.build({
        total: req.body.total,
        desc: req.body.desc,
        ativo: 1,
        fkProduct: req.body.fkProduct,
    });

    await products.save();
    await resp.json({ "status": "OK" });
    resp.end();

});

knl.get('frete', async (req, resp) => {
    let result = await knl.sequelize().models.Frete.findAll({
        where: {
            ativo: 1
        }
    });
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)) {
        for (let products of result) {
            const product = await knl.sequelize().models.Products.findAll({
                where: {
                    id: products.fkGroup
                }
            })

            if (!knl.objects.isEmptyArray(product)) {
                products.product_description = product[0].description
            }

            console.log(products.product_description)
        }
    }
    result = knl.objects.copy(result);
    resp.json(result);
    resp.end();
});

knl.get('frete/:id', async (req, resp) => {
    const result = await knl.sequelize().models.Frete.findAll({
        where: {
            id: req.params.id,
            status: 1
        }
    });
    resp.json(result);
    resp.end();
});

knl.get('fretes', async (req, resp) => {
    const result = await knl.sequelize().models.Frete.findAll({
        where: {
            ativo: 1
        }
    });
    resp.json(result);
    resp.end();
});

knl.put('frete', async (req, resp) => {
    const result = await knl.sequelize().models.Frete.update({
        fkProduct: req.body.fkProduct,
        total: req.body.total,
        desc: req.body.desc,
    }, {
        where: {
            id: req.body.id
        }
    });
    resp.json({ "status": "OK" }, result);
    resp.end();
});

knl.patch('frete/:id', async (req, resp) => {
    const result = await knl.sequelize().models.Frete.update({
        status: 0
    },
        {
            where: {
                id: req.params.id
            }
        });
    resp.json({ "status": "OK" }, result);
    resp.end();
})
knl.delete('frete/:id', async (req, resp) => {
    const result = await knl.sequelize().models.Frete.destroy({
        where: {
            id: req.params.id
        }
    });
    resp.json({ "status": "OK" }, result);
    resp.end();
})