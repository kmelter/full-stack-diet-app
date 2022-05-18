const { Diet } = require('../models');

const dietData = [
    {
        diet_name: 'Keto'
    },
    {
        diet_name: 'Vegan'
    },
    {
        diet_name: 'Paleo'
    }
];

const seedDiets = () => Diet.bulkCreate(dietData);

module.exports = seedDiets;