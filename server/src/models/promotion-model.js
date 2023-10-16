const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Promotion', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        description: {
            type : Sequelize.STRING(100),
            allowNull : false,
        },
        status:{
            type : Sequelize.INTEGER,
            allowNull : false
        },
        months:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        desconto:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ativo:{
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        }


    })
}