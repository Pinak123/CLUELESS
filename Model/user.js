
const bcrypt = require('bcrypt');
const db = require('../db');

class User{
    static async findByEmail(email) {
        const [rows] = await db.execute(
            'SELECT * FROM sign_up WHERE email = ?',
            [email]
        );
        return rows[0];
    }
    static async findByName(name) {
        const [rows] = await db.execute(
            'SELECT * FROM sign_up WHERE username = ?',
            [name]
        );
        return rows[0];
    }
    static async create(userData) {
         const { 
                name,
                email, 
                password,
                username,
                gender,
                DOB,
                qualification,
                Address
             } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.execute(
            'INSERT INTO sign_up (name, email, password, username, gender, DOB, qualification, Address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',//+
            [name, email, hashedPassword, username, gender, DOB, qualification, Address]//+
        );

        return result.insertId;
    }

}
module.exports = User;
