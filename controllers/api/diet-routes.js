const router = require('express').Router();

const { Diet, Food, FoodDiet } = require('../../models');

// GET all diets
router.get('/', (req, res) => {
    Diet.findAll({
    })
    .then((dietData) => {
        res.json(dietData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create one diet
router.post('/', (req, res) => {
    /* req.body should look like this...
    {
      diet_name: "Keto"
      foodIds: [1, 2, 3]
    }
    */

    Diet.create({
            diet_name: req.body.diet_name,
            foodIds: req.body.foodIds
        })
        .then((diet) => {
            // if there are food tags, we need to create pairings to bulk create in the FoodDiet model
            if (req.body.foodIds.length) {
                const foodDietIdArr = req.body.foodIds.map((food_id) => {
                  return {
                    diet_id: diet.id,
                    food_id,
                  };
                });
                return FoodDiet.bulkCreate(foodDietIdArr);
            }
            // if no product tags, just respond
            res.status(200).json(diet);
        })
        .then((foodDietIds) => res.status(200).json(foodDietIds))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

module.exports = router;