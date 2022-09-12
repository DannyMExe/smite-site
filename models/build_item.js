'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Build_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Build_item.init({
    item_id: DataTypes.INTEGER,
    build_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Build_item',
  });
  return Build_item;
};