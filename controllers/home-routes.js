const router = require('express').Router();
const { Diet, Food, FoodDiet } = require('../models');

const withAuth = require('../utils/auth');

// log in screen/ welcome "I can has Cheeseburger? Log in to find out."

// For now this is what the route will look like
// Once the landing page is setup, we will display the landing page here
router.get('/', withAuth, async (req, res) => {
    res.redirect('/main-page');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

// having the async function here because of the diet request is something we may want to change
router.get('/mainPage', async (req, res) => {
  try {
    const dbDietData = await Diet.findAll({})
    const diets = dbDietData.map((diet) =>
      diet.get({ plain: true })
    );
    console.log(diets);
    res.render('mainPage', {diets, loggedIn: req.session.loggedIn})
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
  module.exports = router;