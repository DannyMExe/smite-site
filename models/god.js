'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class God extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      God.hasMany(models.Build, { foreignKey: 'god_id' });
    }
  }
  God.init({
    id: DataTypes.INTEGER,
    god_name: DataTypes.STRING,
    ability1: DataTypes.STRING,
    ability2: DataTypes.STRING,
    ability3: DataTypes.STRING,
    ability4: DataTypes.STRING,
    ability5: DataTypes.STRING,
    atk_spd: DataTypes.DECIMAL,
    atk_spd_per_lvl: DataTypes.DECIMAL,
    auto_banned: DataTypes.STRING,
    cons: DataTypes.STRING,
    hp5_per_lvl: DataTypes.DECIMAL,
    health: DataTypes.INTEGER,
    health_per_5: DataTypes.INTEGER,
    health_per_lvl: DataTypes.INTEGER,
    lore: DataTypes.TEXT,
    mp5_per_lvl: DataTypes.DECIMAL,
    magic_prot: DataTypes.INTEGER,
    magic_prot_per_lvl: DataTypes.DECIMAL,
    magical_power: DataTypes.INTEGER,
    magical_power_per_lvl: DataTypes.INTEGER,
    mana: DataTypes.INTEGER,
    mana_per_5: DataTypes.DECIMAL,
    mana_per_lvl: DataTypes.INTEGER,
    on_free_rotation: DataTypes.STRING,
    pantheon: DataTypes.STRING,
    phys_power: DataTypes.INTEGER,
    phys_power_per_lvl: DataTypes.INTEGER,
    phys_prot: DataTypes.INTEGER,
    phys_prot_per_lvl: DataTypes.INTEGER,
    pros: DataTypes.STRING,
    role: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    god_ability1_image: DataTypes.STRING,
    god_ability2_image: DataTypes.STRING,
    god_ability3_image: DataTypes.STRING,
    god_ability4_image: DataTypes.STRING,
    god_ability5_image: DataTypes.STRING,
    god_card_image: DataTypes.STRING,
    god_icon_image: DataTypes.STRING,
    latest_god: DataTypes.STRING,
    abilities: DataTypes.ARRAY(DataTypes.TEXT),
    basic_attacks: DataTypes.ARRAY(DataTypes.TEXT),
    skins: DataTypes.ARRAY(DataTypes.TEXT),
    role_icon: DataTypes.STRING,
    panth_icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'God',
  });
  return God;
};