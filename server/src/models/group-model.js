const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Group', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        description: {
            type : Sequelize.STRING(100),
            allowNull : false,
        },status:{
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}