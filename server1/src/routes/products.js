const Joi=require('joi');
const knl =require('../knl');

knl.post('products', async(req, resp) =>{
    const schema =Joi.object({
        description:
        Joi.string().min(1).max(100).required(),
        salePrice:
        Joi.number().min(1).required(),
        fkGroup:
        Joi.number().min(1).required(),
        fkSubGroup:
        Joi.number().min(1).required(),
        fkCollection:
        Joi.number().min(1).required(),




    })
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Products.findAll({
        where:{
            description: req.body.description,
            salePrice: req.body.salePrice,
            fkGroup: req.body.fkGroup,
            fkSubGroup: req.body.fkSubGroup,
            fkCollection: req.body.fkCollection,
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const products =knl.sequelize().models.Products.build({
        description: req.body.description,
        salePrice: req.body.salePrice,
        status:1,
        fkGroup: req.body.fkGroup,
        fkSubGroup: req.body.fkSubGroup,
        fkCollection: req.body.fkCollection,
    });

    await products.save();
    await resp.json({"status":"OK"});
    resp.end();

})
knl.get('products', async (req, resp)=>{
    let result =await knl.sequelize().models.Products.findAll({
        where: {
            status:1
        }
    });
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let products of result){
            const group = await knl.sequelize().models.Group.findAll({
                where : {
                    id : products.fkGroup
                }
            })

            if (!knl.objects.isEmptyArray(group)){
                products.group_description = group[0].description
            }

            console.log(products.group_description)
        }
    }
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let products of result){
            const subgroup = await knl.sequelize().models.Subgroup.findAll({
                where : {
                    id : products.fkSubGroup
                }
            })

            if (!knl.objects.isEmptyArray(subgroup)){
                products.subgroup_description = subgroup[0].description
            }

            console.log(products.subgroup_description)
        }
    }
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let products of result){
            const collection = await knl.sequelize().models.Collection.findAll({
                where : {
                    id : products.fkCollection
                }
            })

            if (!knl.objects.isEmptyArray(collection)){
                products.collection_description = collection[0].description
            }

            console.log(products.collection_description)
        }
    }
    resp.json(result);
    resp.end();
})
knl.get('products/:id', async (req,resp)=>{
    const result =await knl.sequelize().models.Products.findAll({
        where: {
            id:req.params.id,
            status:1
        }
    });
    resp.json(result);
    resp.end();
})
knl.put('products', async(req, resp) => {
    const result = await knl.sequelize().models.Products.update({
        description:req.body.description,
        salePrice: req.body.salePrice,
    }, {
        where : {
        id : req.body.id
    }});
    
    
    resp.json({"status":"OK"});
    resp.end();
});
knl.patch('products/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Products.update({
        status:0
    },
    {
    where:{
        id:req.params.id
        }
    });
    resp.json({"status":"OK"});
    resp.end();
})
knl.delete('products/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Products.destroy({
        where:{
            id: req.params.id
        }
    });
    resp.json({"status":"OK"});
    resp.end();
})