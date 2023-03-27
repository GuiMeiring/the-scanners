const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
knl.post('requests', async(req, resp) =>{
    const schema =Joi.object({
        fkClients:
        Joi.number().min(1).required(),
        DateEmission: 
        Joi.date().raw().required(), 
        DateDelivery: 
        Joi.date().raw().required(),
        fkAddress:
        Joi.number().min(1).required(),
        total:
        Joi.number().min(1).max(9999999999).required(),
        prodRequests : Joi.array().items(Joi.object({
            fkProducts:Joi.number().min(1).required(),
            amount:Joi.number().min(1).max(999999).required(),
            unitPrice:Joi.number().min(1).max(9999999999).required(),
            discount:Joi.number().min(0).max(100).required(),
            increase:Joi.number().min(0).max(100).required(),
            total:Joi.number().min(1).max(9999999999).required(),
            
        }))
        
    })
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Requests.findAll({
        where:{
            fkClients:req.body.fkClients,
            DateEmission: req.body.DateEmission,
            DateDelivery:req.body.DateDelivery,
            total:req.body.total,
            fkAddress:req.body.fkAddress

        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const requests =knl.sequelize().models.Requests.build({
        fkClients:req.body.fkClients,
        DateEmission: req.body.DateEmission,
        DateDelivery:req.body.DateDelivery, 
        total:req.body.total,
        fkAddress:req.body.fkAddress,
        status: 1
    });
    await requests.save();

    
    for (const prodRequests of req.body.prodRequests){
        const result2 = knl.sequelize().models.ProdRequests.build({
            fkRequests : requests.id,
            fkProducts : prodRequests.fkProducts,
            amount : prodRequests.amount,
            unitPrice : prodRequests.unitPrice,
            discount : prodRequests.discount,
            increase: prodRequests.increase,
            total:prodRequests.total,
            status: 1
        })

        await result2.save();        
    }
    await resp.json({"status":"OK"});

    resp.end();
});

knl.get('requests/:id', async (req, resp)=>{
    let result =await knl.sequelize().models.Requests.findAll({
        where: {
            status:1,
            id: req.params.id
        }
    });
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let requests of result){
            const client = await knl.sequelize().models.Clients.findAll({
                where : {
                    id : requests.fkClients
                }
            })

            if (!knl.objects.isEmptyArray(client)){
                requests.client_name = client[0].name
            }

            console.log(requests.client_name)
        }
    }
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let requests of result){
            const address = await knl.sequelize().models.Endereco.findAll({
                where : {
                    id : requests.fkAddress
                }
            })

            if (!knl.objects.isEmptyArray(address)){
                requests.address_rua = address[0].rua
            }

            console.log(requests.address_rua)
        }
    }
    resp.json(result);
    resp.end();
})
knl.get('requests', async (req,resp)=>{
    let result =await knl.sequelize().models.Requests.findAll({
        where: {
            status:1
        }
    });
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let requests of result){
            const client = await knl.sequelize().models.Clients.findAll({
                where : {
                    id : requests.fkClients
                }
            })

            if (!knl.objects.isEmptyArray(client)){
                requests.client_name = client[0].name
            }

            console.log(requests.client_name)
        }
    }
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let requests of result){
            const address = await knl.sequelize().models.Endereco.findAll({
                where : {
                    id : requests.fkAddress
                }
            })

            if (!knl.objects.isEmptyArray(address)){
                requests.address_rua = address[0].rua
            }

            console.log(requests.address_rua)
        }
    }
    resp.json(result);
    resp.end();
})
knl.get('ProdRequests/:id', async (req, resp)=>{
    
    let result =await knl.sequelize().models.ProdRequests.findAll({
        where: {
            fkRequests: req.params.id,
            status:1
        }
    });
    result = knl.objects.copy(result);

    if (!knl.objects.isEmptyArray(result)){
        for(let requests of result){
            const product = await knl.sequelize().models.Products.findAll({
                where : {
                    id : requests.fkProducts
                }
            })

            if (!knl.objects.isEmptyArray(product)){
                requests.product_description = product[0].description
            }

            console.log(requests.product_description)
        }
    }
    resp.send(result);
})
knl.put('requests', async(req, resp)=>{
    const result = await knl.sequelize().models.Requests.update({
        fkClients:req.body.fkClients,
        DateEmission: req.body.DateEmission,
        DateDelivery:req.body.DateDelivery, 
        total:req.body.total,
        fkAddress:req.body.fkAddress,
        status: 1
    },{
        where : {
            id: req.body.fkRequests
        }
    });

    for (const prodRequests of req.body.prodRequests){
        const result2 = knl.sequelize().models.ProdRequests.update({
            fkProducts : prodRequests.fkProducts,
            amount : prodRequests.amount,
            unitPrice : prodRequests.unitPrice,
            discount : prodRequests.discount,
            increase: prodRequests.increase,
            total:prodRequests.total,
            status: 1
        },{
            where : {
                id: prodRequests.id
            }
        })  
    }
    resp.json({"status":"OK"});
    resp.end();
});
knl.patch('ProdRequests/:id', async(req,resp)=>{
    console.log(req.params.id);
    const result = await knl.sequelize().models.Requests.update({ 
        total:req.body.total,
    },{
        where : {
            id: req.body.fkRequests
        }
    });
    const result2 = await knl.sequelize().models.ProdRequests.update({
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
knl.patch('requests/:id', async(req,resp)=>{
    console.log(req.params.id);
    const result = await knl.sequelize().models.Requests.update({
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
knl.post('prodRequests', async(req,resp)=>{
    const schema =Joi.object({
        fkRequests: Joi.number().min(1).required(),
        prodRequests : Joi.array().items(Joi.object({
            fkProducts:Joi.number().min(1).required(),
            amount:Joi.number().min(1).max(999999).required(),
            unitPrice:Joi.number().min(1).max(9999999999).required(),
            discount:Joi.number().min(0).max(100).required(),
            increase:Joi.number().min(0).max(100).required(),
            total:Joi.number().min(1).max(9999999999).required(),
            
        }))
        
    })
    knl.validate(req.body, schema);
    for (const prodRequests of req.body.prodRequests){
        const result2 = knl.sequelize().models.ProdRequests.build({
            fkRequests : req.body.fkRequests,
            fkProducts : prodRequests.fkProducts,
            amount : prodRequests.amount,
            unitPrice : prodRequests.unitPrice,
            discount : prodRequests.discount,
            increase: prodRequests.increase,
            total:prodRequests.total,
            status: 1
        })  
        await result2.save();      
    } 
    await resp.json({"status":"OK"});
    resp.end();
})
knl.patch("requestsAdd/:id", async(req,resp)=>{
    const result = await knl.sequelize().models.Requests.update({
        total: req.body.total
    },
    {
    where:{
        id:req.params.id
        }
    });
    resp.json({"status":"OK"});resp.send(result);
    resp.end();
})
