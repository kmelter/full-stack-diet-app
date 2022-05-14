const Food = require('./Food');
const User = require('./User');
const Diet = require('./Diet');
const FoodDiet = require('./FoodDiet');

Food.belongsToMany(Diet, {
    through: FoodDiet,
    as: 'safe_diets',
    foreignKey: 'food_id'
});

Diet.belongsToMany(Food, {
    through: FoodDiet,
    as: 'safe_foods',
    foreignKey: 'diet_id'
});

module.exports = { Food, User, Diet, FoodDiet };