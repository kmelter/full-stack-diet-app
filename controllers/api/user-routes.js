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

// POST /api/users
router.post('/', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        })
    });
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;