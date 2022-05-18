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

// may want to change the name
router.get('/mainPage', withAuth, (req, res) => {
    res.render('mainPage')
})
  
  module.exports = router;