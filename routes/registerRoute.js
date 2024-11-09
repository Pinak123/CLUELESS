const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../Model/user')


router.get('/', async (req, res) => {
    try {
        const { 
                name,
                email, 
                password,
                username,
                gender,
                DOB,
                qualification,
                Address
             } = req.body;

        // Check if user already exists
        const existingUser = await User.findByEmail(email) || await User.findByName(name);
        if (existingUser) {
            return res.status(400).json({
                status: 'error',
                message: 'User already registered'
            });
        }

        // Create new user
        const userId = await User.create({name, email, password, username, gender, DOB, qualification, Address });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            data: {
                userId,
                name,
                email,
                password
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred during registration'
        });
    }
});

module.exports = router;