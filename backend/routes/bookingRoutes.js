const express = require('express');
const router = express.Router();
const { getAllBookings, createBooking } = require('../controllers/bookingController');

// Routes
router.get('/', getAllBookings);
router.post('/', createBooking);

module.exports = router;
