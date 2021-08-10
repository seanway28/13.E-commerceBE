const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrment: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      references: {
        model: "tag",
        key: "id",
      },

      sequelize: sequelize, 
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      model: "product_tag",
    }, 

    
    sequelize: sequelize},

);
module.exports = ProductTag;
