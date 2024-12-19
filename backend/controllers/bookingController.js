const db = require('../models/db');

const getAllBookings = (req, res) => {
  const query = 'SELECT * FROM bookings';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

const createBooking = (req, res) => {
  const { user_id, room_id, check_in_date, check_out_date, total_price, status } = req.body;
  const query = `
    INSERT INTO bookings (user_id, room_id, check_in_date, check_out_date, total_price, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [user_id, room_id, check_in_date, check_out_date, total_price, status], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Booking created successfully', bookingId: results.insertId });
  });
};

module.exports = { getAllBookings, createBooking };
