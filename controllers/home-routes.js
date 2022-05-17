const router = require('express').Router();
const { Diet, Food, FoodDiet } = require('../models');

const withAuth = require('../utils/auth');

// log in screen/ welcome "I can has Cheeseburger? Log in to find out."

