const Sequelize = require('sequelize');
const db = require('./database');

const Build_item = db.define('build_item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    item_id: {
        type: Sequelize.INTEGER,
    },
    build_id: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Build_item;