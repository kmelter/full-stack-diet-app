const router = require('express').Router();

const { User, Diet, UserDiet } = require('../../models');

// GET all users
router.get('/', (req, res) => {
    User.findAll({
        include: [
            {
                model: Diet,
                as: 'diets',
                through: UserDiet
            }
        ],
        attributes: { exclude: ['password'] }
    })
    .then((userData) => {
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET one user

module.exports = router;