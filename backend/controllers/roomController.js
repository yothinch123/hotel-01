const db = require('../models/db');

// Get all rooms
const getAllRooms = (req, res) => {
  const query = 'SELECT * FROM rooms';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Create a new room
const createRoom = (req, res) => {
  const { room_number, room_type_id, is_available } = req.body;
  const query = 'INSERT INTO rooms (room_number, room_type_id, is_available) VALUES (?, ?, ?)';
  db.query(query, [room_number, room_type_id, is_available], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Room created successfully', roomId: results.insertId });
  });
};

module.exports = { getAllRooms, createRoom };
