const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Frete', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        fkProduct: {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        
        total: {
            type : Sequelize.DECIMAL(),
            allowNull : false,
        },
        desc:{
            type : Sequelize.INTEGER,
            allowNull : false
        },
        ativo: {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}