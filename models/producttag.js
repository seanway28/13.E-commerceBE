const {Model, DataTypes} = require('sequelize');

const sequelize=require('../config/connection');

class ProuctTag extends Model {}

ProductTag.init(
{
//define columns
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrment: true,
},
product_id:{
    type: DataTypes.INTEGER,
    allowNULL: false,
    references:{
        modell: 'product',
        key: 'id'
    
}
},
tag_id: {
    type: DataTypes.INTEGER,
    allowNULL: false,
    references: {
        model: 'tag',
        key: 'id',
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'product_tag',
},
},
modelName, 'ProductTag',


)