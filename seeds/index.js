const seedDiets = require('./diet-seeds');
const seedFoods = require('./food-seeds');
const seedFoodDiets = require('./food-diet-seeds');
const seedUsers = require('./user-seeds');
const seedUserDiets = require('./user-diet-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedDiets();
    console.log('\n----- DIETS SEEDED -----\n');

    await seedFoods();
    console.log('\n----- FOODS SEEDED -----\n');

    await seedFoodDiets();
    console.log('\n----- FOOD DIETS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedUserDiets();
    console.log('\n----- USER DIETS SEEDED -----\n');

    process.exit(0);
};

seedAll();