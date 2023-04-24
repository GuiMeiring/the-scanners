const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Requests', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        status:{
            type : Sequelize.INTEGER,
            allowNull : true
        },
        fkClients:{
            type : Sequelize.INTEGER(),
            allowNull : false
        },
        fkAddress:{
            type : Sequelize.INTEGER(),
            allowNull : false
        },
        DateEmission:{
            type: Sequelize.DATE(),
            allowNull: false,
        },
        DateDelivery:{
            type:Sequelize.DATE(),
            allowNull: false
        },
       
        total:{
            type:Sequelize.DECIMAL(10,2),
            allowNull:false
        },
    })
}