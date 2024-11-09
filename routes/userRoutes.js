const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../Model/user')
// Middleware specific to this router
router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});



// GET all users
router.get('/', async (req, res) => {
    try {
        // Example response
        res.json({ message: 'Get all users' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM login');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

///Register controller
//// Login controller
router.get('/login', (req, res) => {


});



module.exports = router;