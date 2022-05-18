const { Food } = require('../models');

const foodData = [
    {
        food_name: 'legumes'
    },
    {
        food_name: 'fish'
    },
    {
        food_name: 'chicken'
    },
    {
        food_name: 'soy milk'
    },
    {
        food_name: 'eggs'
    },
    {
        food_name: 'cheese'
    },
    {
        food_name: 'kale'
    },
    {
        food_name: 'cashews'
    },
    {
        food_name: 'apples'
    }
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;