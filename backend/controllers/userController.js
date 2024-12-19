const db = require('../models/db');

const getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

const createUser = (req, res) => {
  const { name, email, password, phone_number } = req.body;
  const query = 'INSERT INTO users (name, email, password, phone_number) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, password, phone_number], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'User created successfully', userId: results.insertId });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT email, password FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      if (results.length == 1) {
      res.status(200).json({ message: '', data: results });
    } else {
      res.status(404).json({ message: 'not found user', data: results });
      }
    }
  });
};

module.exports = { getAllUsers, createUser, loginUser };
