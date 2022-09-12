'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.createTable('Builds', {
			build_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			author_id: {
				type: Sequelize.INTEGER,
			},
			god_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Gods',
					key: 'id',
				},
			},
			relic1_id: {
				type: Sequelize.INTEGER,
			},
			relic2_id: {
				type: Sequelize.INTEGER,
			},
			final_items: {
				type: Sequelize.ARRAY({
					type: Sequelize.INTEGER,
					references: {
						model: 'Items',
						key: 'item_id'
					}
				}),
			},
			desc: {
				type: Sequelize.TEXT,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		}, {timestamps: {
			required: false,
		}});

	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropAllTables();
	},
};
