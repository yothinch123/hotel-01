const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, loginUser } = require('../controllers/userController');

// Routes
router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/login', loginUser);

module.exports = router;
