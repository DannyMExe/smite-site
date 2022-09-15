const Sequelize = require('sequelize');
const db = require('./database');

const Build = db.define('build', {
  // define your model here!
    build_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    god_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    relic1_id: {
        type: Sequelize.INTEGER
    },
    relic2_id: {
        type: Sequelize.INTEGER
    },
    final_items: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    desc: {
        type: Sequelize.TEXT,
    }
});
module.exports = Build;