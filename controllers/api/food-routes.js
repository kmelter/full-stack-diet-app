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
router.post('/', (req, res) => {
    /* req.body should look like this...
    {
      food_name: "Chocolate Bar"
      dietIds: [1, 2, 3]
    }
    */
    Food.create(req.body)
        .then((food) => {
            // if there are diet tags, we need to create pairings to bulk create in the FoodDiet model
            if (req.body.dietIds.length) {
                const foodDietIdArr = req.body.dietIds.map((diet_id) => {
                  return {
                    food_id: food.id,
                    diet_id,
                  };
                });
                return FoodDiet.bulkCreate(foodDietIdArr);
              }
              // if no product tags, just respond
              res.status(200).json(food);
        })
        .then((foodDietIds) => res.status(200).json(foodDietIds))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

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