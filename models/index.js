// const Category = require('./Category');
const User = require('./User'); 
const Plant = require('./Plant');

User.hasMany(Plant, {
    foriegn_key: 'user_id'
});

Plant.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Plant };