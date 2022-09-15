const Sequelize = require('sequelize');
const db = require('./database');

const Skin = db.define('skin', {
    godIcon_URL: {
        type: Sequelize.STRING
    },
    godSkin_URL: {
        type: Sequelize.STRING
    },
    god_id:  {
        type: Sequelize.INTEGER
    },
    god_name: {
        type: Sequelize.STRING
    },
    obtainability: {
        type: Sequelize.STRING
    },
    price_favor: {
        type: Sequelize.INTEGER
    },
    price_gems: {
        type: Sequelize.INTEGER
    },
    skin_id1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    skin_id2: {
        type: Sequelize.INTEGER,
    },
    skin_name: {
        type: Sequelize.STRING
    }
});

module.exports = Skin;