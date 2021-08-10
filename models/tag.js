const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const { truncate } = require("./category.js");
const ProductTag = require("./productTag.js");

class Tag extends ProductTag {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    model: "tag",
  }
);

sequelize: sequelize;

module.exports = Tag;