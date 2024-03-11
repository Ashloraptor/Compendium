// const Category = require('./Category');
// const Category = require('./Category');
const User = require('./User'); 
const Plant = require('./Plant');



User.hasMany(Plant, {
    foriegn_key: 'user_id',
    onDelete: 'CASCADE'
});
// User.hasMany(Category, {
//     foriegn_key: 'user_id'
// });

Plant.belongsTo(User, {
    foreignKey: 'user_id'
});

// Category.belongsTo(User, {
//         foriegn_key:'user_id',
//     });

// Category.hasMany(Plant, {
//     foreign_key: 'category_id',
// });

// Plant.belongsToMany(Category, {
//     through: User,
//     foreign_key: 'plant_id',
// });

module.exports = { User, Plant };