const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Endereco', {
        id:{
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : true
        },
        status:{
            type : Sequelize.INTEGER,
            allowNull : true
        },
        rua:{
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        bairro:{
            type: Sequelize.STRING(30),
            allowNull: true,
        },
        cidade:{
            type: Sequelize.STRING(60),
            allowNull: true,
        },
        estado:{
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        cep:{
            type: Sequelize.STRING(9),
            allowNull:true,
        },
        numero:{
            type: Sequelize.INTEGER(),
            allowNull:true,
        },
        complemento:{
            type: Sequelize.STRING(100),
            allowNull:true,
        },
        pontoDeReferencia:{
            type: Sequelize.STRING(100),
            allowNull:true,
        },
        fkClients:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    })
}  