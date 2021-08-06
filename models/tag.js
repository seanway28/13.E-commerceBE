const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');
const { truncate } = require('./category.js');
const ProuctTag = require('./producttag.js');

class Tad extends Model{}

ProuctTag.init(
    {
        // define columns
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
            tag_name: {
                type: DataTypes.STRING,
                allowNull:false,
                unique:true
            }
    },
    {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'tag',

    }
);