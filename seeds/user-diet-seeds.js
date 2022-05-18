const { UserDiet } = require('../models');

const userDietData = [
    {
        user_id: 1,
        diet_id: 1
    }
];

const seedUserDiets = () => UserDiet.bulkCreate(userDietData);

module.exports = seedUserDiets;