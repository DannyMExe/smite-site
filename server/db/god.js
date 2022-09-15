const Sequelize = require('sequelize');
const db = require('./database');

const God = db.define('god', {
  // define your model here!
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    god_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ability1: {
        type: Sequelize.STRING,
    },
    ability2: {
        type: Sequelize.STRING,
    },
    ability3: {
        type: Sequelize.STRING,
    },
    ability4: {
        type: Sequelize.STRING,
    },
    ability5: {
        type: Sequelize.STRING,
    },
    ability1_id: {
        type: Sequelize.INTEGER
    },
    ability2_id: {
        type: Sequelize.INTEGER
    },
    ability3_id: {
        type: Sequelize.INTEGER
    },
    ability4_id: {
        type: Sequelize.INTEGER
    },
    ability5_id: {
        type: Sequelize.INTEGER
    },
    atk_spd: {
        type: Sequelize.DECIMAL
    },
    atk_spd_per_lvl: {
        type: Sequelize.DECIMAL
    },
    auto_banned: {
        type: Sequelize.STRING,
    },
    cons: {
        type: Sequelize.STRING
    },
    hp5_per_lvl: {
        type: Sequelize.DECIMAL
    },
    health: {
        type: Sequelize.INTEGER
    },
    health_per_5: {
        type: Sequelize.INTEGER
    },
    health_per_lvl: {
        type: Sequelize.INTEGER
    },
    lore: {
        type: Sequelize.TEXT
    },
    mp5_per_lvl: {
        type: Sequelize.DECIMAL
    },
    magic_prot: {
        type: Sequelize.DECIMAL
    },
    magic_prot_per_lvl: {
        type: Sequelize.DECIMAL
    },
    magical_power: {
        type: Sequelize.INTEGER
    },
    magical_power_per_lvl: {
        type: Sequelize.INTEGER
    },
    mana: {
        type: Sequelize.DECIMAL
    },
    mana_per_5: {
        type: Sequelize.DECIMAL
    },
    mana_per_lvl: {
        type: Sequelize.INTEGER
    },
    on_free_rotation: {
        type: Sequelize.STRING
    },
    pantheon: {
        type: Sequelize.STRING
    },
    phys_power: {
        type: Sequelize.INTEGER
    },
    phys_power_per_lvl: {
        type: Sequelize.INTEGER
    },
    phys_prot: {
        type: Sequelize.INTEGER
    },
    phys_prot_per_lvl: {
        type: Sequelize.INTEGER
    },
    pros: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    speed: {
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    god_ability1_image: {
        type: Sequelize.STRING
    },
    god_ability2_image: {
        type: Sequelize.STRING
    },
    god_ability3_image: {
        type: Sequelize.STRING
    },
    god_ability4_image: {
        type: Sequelize.STRING
    },
    god_ability5_image: {
        type: Sequelize.STRING
    },
    god_card_image: {
        type: Sequelize.STRING
    },
    god_icon_image: {
        type: Sequelize.STRING
    },
    latest_god: {
        type: Sequelize.STRING
    },
    role_icon: {
        type: Sequelize.STRING
    },
    panth_icon: {
        type: Sequelize.STRING
    }
});


module.exports = God;