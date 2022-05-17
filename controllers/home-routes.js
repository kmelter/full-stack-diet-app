const router = require('express').Router();
const { Diet, Food, FoodDiet } = require('../models');

const withAuth = require('../utils/auth');

// log in screen/ welcome "I can has Cheeseburger? Log in to find out."
// router.get('/', withAuth, async (req, res) => {
//     try {
      
//     }

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });
  
//   module.exports = router;