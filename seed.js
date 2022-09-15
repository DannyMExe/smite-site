const { db, Build, God, Item, Skin, User } = require('./server/db')
const { gods, items, skins, users } = require('./seedInfo/')

const builds = [
	{
		build_id: 1,
		user_id: 1,
        name: 'First Build',
		god_id: 3492,
		relic1_id: 21490,
		relic2_id: 21499,
		final_items: [19491, 14085, 7528, 8540, 12664, 12679],
		desc: "Extremely tanky build that will allow you to still do enough damage to solo any mage or hunter. Swap Mantle for whatever is needed late game. Spectral if dying to crit, Magi's Cloak if being locked down, more of a specific Defense if they are heavy physical damage or heavy magical damage.",
	},
	{
		build_id: 2,
		user_id: 3,
        name: 'Second Build',
		god_id: 1737,
		relic1_id: 21490,
		relic2_id: 21499,
		final_items: [19509, 7832, 18180, 9128, 21484, 18179],
		desc: 'Play deep around walls, save your stun combo for team fight setup or peel for yourself when the jungle/solo dives you. Upgrade RELICS after finishing obsidian shard.',
	},
];





// Build.belongsTo(God, { foreignKey: 'god_id' });
// God.hasMany(Build, { foreignKey: 'god_id' });

// Build.belongsToMany(Item, {
// 	through: Build_item,
// 	foreignKey: 'build_id',
// });
// Item.belongsToMany(Build, {
// 	through: Build_item,
// 	foreignKey: 'item_id',
// });
const seed = async () => {
	try {
        await db.sync({ force: true });
		await Promise.all(
			items.map((item) => {
				item.menuitems = item.menuitems.map((obj) =>
					JSON.stringify(obj)
				);
				Item.create(item);
			})
		);

		await Promise.all(
			gods.map((god) => {
				God.create(god);
			})
		);

		await Promise.all(
			users.map(credentials => User.create(credentials))
		)

		const newBuilds = await Promise.all(
			builds.map((build) => Build.create(build))
		);
        await Promise.all(
            newBuilds.map((build) => {
                build.final_items.map((item) => {
                    build.addItem(item)
                })
            })
        )

		await Promise.all(
			skins.map(skin => Skin.create(skin))
		);



		console.log('Successfully seeded the database!');
	} catch (error) {
		console.error('There was a problem seeding the database', error);
	}
};
seed()
	.catch((err) => {
		console.error('Problem seeding:', err);
		db.close();
	});
