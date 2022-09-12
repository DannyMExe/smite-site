'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Build.belongsTo(models.God, { foreignKey: 'god_id' });
      Build.belongsToMany(models.Item, {
        through: models.Build_item,
        foreignKey: 'build_id',
      });
    }
  }
  Build.init({
    build_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    god_id: DataTypes.INTEGER,
    relic1_id: DataTypes.INTEGER,
    relic2_id: DataTypes.INTEGER,
    final_items: DataTypes.ARRAY(DataTypes.INTEGER),
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Build',
  });
  return Build;
};