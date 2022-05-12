const router = require('express').Router();

const { Food } = require('../../models');

// GET all foods
router.get('/', (req, res) => {
    Food.findAll({})
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

// GET food by diet(s)

// Update one food

module.exports = router;