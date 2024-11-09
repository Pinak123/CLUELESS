
const bcrypt = require('bcrypt');
const User = require('../Model/user')

const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

const JWT_SECRET = 'your_jwt_secret';

// Login route
router.get('/', async (req, res) => {
  // In practice, verify user credentials from the database here
    const { name, password } = req.body;
    // console.log("Hey there")
    const storedHashedPassword = await User.findByName(name);
            // console.log(storedHashedPassword)
    const HashPass =storedHashedPassword.password
    const userInputPassword = password;

const result = await bcrypt.compare(userInputPassword, HashPass);

    if (!result) {
      return res.status(401).json({ error: 'Invalid username or password' });
    };
    const token = jwt.sign({ name }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
   
});

module.exports = router;
