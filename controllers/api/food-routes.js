const router = require('express').Router();

const { Food, Diet, FoodDiet } = require('../../models');

// GET all foods
router.get('/', (req, res) => {
    Food.findAll({
        include: [
            {
                model: Diet,
                as: 'safe_diets',
                through: FoodDiet
            }
        ]
    })
    .then((foodData) => {
        res.json(foodData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET one food

// Create one food

// GET foods by diet(s)
// currently this only supports using one diet for the search
router.get('/byDiet/:id', async (req, res) => {
    try {
        const dbFoodsData = await Diet.findByPk(req.params.id, {
            include: [
                {
                    model: Food,
                    as: 'safe_foods',
                    attributes: ['id', 'food_name'],
                    through: FoodDiet
                }
            ]
        });
        const foods = dbFoodsData.get({ plain: true }).safe_foods;
        res.json(foods);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Update one food

module.exports = router;