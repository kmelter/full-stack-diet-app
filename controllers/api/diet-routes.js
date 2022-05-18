const router = require('express').Router();

const { Diet } = require('../../models');

// GET all diets
// (no food information returned)
router.get('/', (req, res) => {
    Diet.findAll({})
        .then((dbDietData) => {
            res.json(dbDietData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;