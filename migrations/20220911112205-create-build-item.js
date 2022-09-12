'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Build_items', {
      item_id: {
        type: Sequelize.INTEGER
      },
      build_id: {
        type: Sequelize.INTEGER
      }
    }, {timestamps: false} );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};