const sequelize = require('../config/connection');
const { User, Plant } = require('../models');

const userData = require('./userData.json');
const plantData = require('./plantData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const plant of plantData) {
    // Assign a random user ID to each plant
    const randomUserId = users[Math.floor(Math.random() * users.length)].id;
    await Plant.create({
      ...plant,
      user_id: randomUserId,
    });
  }

  process.exit(0);
};

seedDatabase();
