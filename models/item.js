'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Build, {
        through: models.Build_item,
        foreignKey: 'item_id',
      });
    }
  }
  Item.init({
    id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    active_item: DataTypes.STRING,
    item_name: DataTypes.STRING,
    child_item_id: DataTypes.INTEGER,
    icon_id: DataTypes.INTEGER,
    item_desc: DataTypes.STRING,
    menuitems: DataTypes.ARRAY(DataTypes.TEXT),
    item_short_desc: DataTypes.STRING,
    item_tier: DataTypes.INTEGER,
    item_price: DataTypes.INTEGER,
    starting_item: DataTypes.INTEGER,
    type: DataTypes.STRING,
    item_icon: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};