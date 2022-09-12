'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Items', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			item_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			active_item: {
				type: Sequelize.STRING,
			},
			item_name: {
				type: Sequelize.STRING,
			},
			child_item_id: {
				type: Sequelize.INTEGER,
			},
			icon_id: {
				type: Sequelize.INTEGER,
			},
			item_desc: {
				type: Sequelize.TEXT,
			},
			menuitems: {
				type: Sequelize.ARRAY(Sequelize.TEXT),
			},
			item_short_desc: {
				type: Sequelize.TEXT,
			},
			item_tier: {
				type: Sequelize.INTEGER,
			},
			item_price: {
				type: Sequelize.INTEGER,
			},
			starting_item: {
				type: Sequelize.INTEGER,
			},
			type: {
				type: Sequelize.STRING,
			},
			item_icon: {
				type: Sequelize.TEXT,
			},
		}, {timestamps: false} );
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropAllTables();
	},
};
