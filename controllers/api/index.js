const router = require('express').Router();
const foodRoutes = require('./food-routes');
const userRoutes = require('./user-routes');
const dietRoutes = require('./diet-routes');

router.use('/foods', foodRoutes);
router.use('/users', userRoutes);
router.use('/diets', dietRoutes);

module.exports = router;