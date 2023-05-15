const { Sequelize } = require("sequelize");
//const { Roles } = require("./roles-model");

module.exports = (sequelize) => {
    sequelize.define('Usuario', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name : {
            type : Sequelize.STRING(100),
            allowNull : false,
        },
        username : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        password : {
            type : Sequelize.STRING(50),
            allowNull : false
        },
        roles : {
            type : Sequelize.INTEGER,
            allowNull : false
        }, 
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        roles:{
            type : Sequelize.INTEGER(11),
            allowNull : false
        }
        //model de rules
        //fk da rules
    })
}