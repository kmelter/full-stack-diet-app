const router = require('express').Router();

const { User } = require('../../models');

// GET all users
router.get('/', (req, res) => {
    User.findAll({})
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