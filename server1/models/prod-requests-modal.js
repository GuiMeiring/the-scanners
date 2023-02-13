const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('ProdRequests', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : true
        },
        status:{
            type : Sequelize.INTEGER,
            allowNull : true
        },
        fkRequests:{
            type : Sequelize.INTEGER,
            allowNull : true
        },
        fkProducts:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        amount:{
            type: Sequelize.INTEGER,
            allowNull:true
        },
        unitPrice:{
            type: Sequelize.INTEGER,
            allowNull:true
        },
        discount:{
            type: Sequelize.INTEGER,
            allowNull:true
        },
        increase:{
            type: Sequelize.INTEGER,
            allowNull:true
        },
        total:{
            type:Sequelize.DECIMAL(10,2),
            allowNull:true
        },
    })
}