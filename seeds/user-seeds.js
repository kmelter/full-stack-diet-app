const { User } = require('../models');

const userData = [
    {
        email: 'test@email.com',
        password: '1234567'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;