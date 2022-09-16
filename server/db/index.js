// // The purpose of this module is to bring your Sequelize instance (`db`) together
// // with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Item = require('./item');
const God = require('./god');
const Build = require('./build');
const Build_item = require('./build_item');
const Skin = require('./skin');
const User = require('./user');

Build.belongsTo(God, { foreignKey: 'god_id' });
God.hasMany(Build, { foreignKey: 'god_id' });

Build.belongsToMany(Item, {
    through: Build_item,
    foreignKey: 'build_id',
});
Item.belongsToMany(Build, {
    through: Build_item,
    foreignKey: 'item_id',
});

Skin.belongsTo(God, { foreignKey: 'god_id'})
God.hasMany(Skin, { foreignKey: 'god_id' });

Build.belongsTo(User, { foreignKey: 'id'})
User.hasMany(Build, { foreignKey: 'id' });



module.exports = {
// 	// Include your models in this exports object as well!
	db,
	Item,
	God,
	Build,
    Skin,
    User,
};
