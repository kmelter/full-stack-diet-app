const { FoodDiet } = require('../models');

const foodDietData = [
    {
        food_id: 2,
        diet_id: 1
    },
    {
        food_id: 7,
        diet_id: 1
    },
    {
        food_id: 3,
        diet_id: 1
    },
    {
        food_id: 5,
        diet_id: 1
    },
    {
        food_id: 8,
        diet_id: 1
    },
    {
        food_id: 6,
        diet_id: 1
    },
    {
        food_id: 1,
        diet_id: 2
    },
    {
        food_id: 4,
        diet_id: 2
    },
    {
        food_id: 7,
        diet_id: 2
    },
    {
        food_id: 8,
        diet_id: 2
    },
    {
        food_id: 9,
        diet_id: 2
    },
    {
        food_id: 2,
        diet_id: 3
    },
    {
        food_id: 3,
        diet_id: 3
    },
    {
        food_id: 7,
        diet_id: 3
    },
    {
        food_id: 8,
        diet_id: 3
    }
];

const seedFoodDiets = () => FoodDiet.bulkCreate(foodDietData);

module.exports = seedFoodDiets;